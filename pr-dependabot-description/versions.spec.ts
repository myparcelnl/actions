import {describe, expect, it} from 'vitest';
import {findUpdates, lockedVersions} from './versions';
import {type Update} from './override';
import {join} from 'node:path';
import {readFileSync} from 'node:fs';

const fixture = (name: string): unknown => JSON.parse(readFileSync(join(__dirname, 'fixtures', name), 'utf8'));

// The upstream holds a function, so the specs compare an update without it.
const updates = (base: Map<string, string[]>, head: Map<string, string[]>): Omit<Update, 'upstream'>[] =>
  findUpdates(base, head).map(({upstream, ...update}) => update);

const versions = (entries: Record<string, string[]>): Map<string, string[]> => new Map(Object.entries(entries));

describe('versions', () => {
  describe('lockedVersions', () => {
    it('reads composer show output', () => {
      expect.assertions(2);

      const locked = lockedVersions(fixture('composer-show.json'), undefined);

      expect(locked.get('myparcelnl/pdk')).toStrictEqual(['5.1.0']);
      expect(locked.get('doctrine/instantiator')).toStrictEqual(['2.0.0']);
    });

    it('reads pnpm list output, transitive packages included', () => {
      expect.assertions(2);

      const locked = lockedVersions(undefined, fixture('pnpm-list.json'));

      expect(locked.get('@myparcel-dev/pdk-admin')).toStrictEqual(['2.4.0']);
      expect(locked.get('@myparcel-dev/pdk-common')).toStrictEqual(['2.3.1']);
    });

    it('keeps every version of a package once', () => {
      expect.assertions(1);

      const list = [
        {
          dependencies: {
            '@myparcel-dev/pdk-admin': {
              version: '2.4.0',
              dependencies: {'@myparcel-dev/pdk-common': {version: '2.3.1'}},
            },
          },
          devDependencies: {
            '@myparcel-dev/pdk-common': {version: '2.2.0'},
            '@myparcel-dev/pdk-checkout': {
              version: '2.2.3',
              dependencies: {'@myparcel-dev/pdk-common': {version: '2.3.1'}},
            },
          },
        },
      ];

      expect(lockedVersions(undefined, list).get('@myparcel-dev/pdk-common')?.sort()).toStrictEqual(['2.2.0', '2.3.1']);
    });

    it('returns an empty map without output', () => {
      expect.assertions(1);

      expect(lockedVersions(undefined, undefined).size).toBe(0);
    });
  });

  describe('findUpdates', () => {
    it('gives the range of a changed PDK package', () => {
      expect.assertions(1);

      expect(updates(versions({'myparcelnl/pdk': ['5.1.0']}), versions({'myparcelnl/pdk': ['5.3.0']}))).toStrictEqual([
        {name: 'myparcelnl/pdk', from: '5.1.0', to: '5.3.0'},
      ]);
    });

    it('runs from the highest base version to the highest head version', () => {
      expect.assertions(1);

      const base = versions({'@myparcel-dev/pdk-common': ['2.2.0', '2.3.0']});
      const head = versions({'@myparcel-dev/pdk-common': ['2.4.1', '2.3.0']});

      expect(updates(base, head)).toStrictEqual([{name: '@myparcel-dev/pdk-common', from: '2.3.0', to: '2.4.1'}]);
    });

    it('sorts the updates by name', () => {
      expect.assertions(1);

      const base = versions({'myparcelnl/pdk': ['5.1.0'], '@myparcel-dev/pdk-admin': ['2.3.0']});
      const head = versions({'myparcelnl/pdk': ['5.3.0'], '@myparcel-dev/pdk-admin': ['2.4.1']});

      expect(findUpdates(base, head).map(({name}) => name)).toStrictEqual([
        '@myparcel-dev/pdk-admin',
        'myparcelnl/pdk',
      ]);
    });

    it.each([
      ['only in head', {}, {'myparcelnl/pdk': ['5.3.0']}],
      ['only in base', {'myparcelnl/pdk': ['5.3.0']}, {}],
      ['unchanged', {'myparcelnl/pdk': ['5.3.0']}, {'myparcelnl/pdk': ['5.3.0']}],
      ['downgraded', {'myparcelnl/pdk': ['5.3.0']}, {'myparcelnl/pdk': ['5.1.0']}],
      ['not upstream', {vite: ['5.4.21']}, {vite: ['6.4.3']}],
      ['not semver', {'myparcelnl/pdk': ['dev-main']}, {'myparcelnl/pdk': ['5.3.0']}],
    ])('gives no update for a package that is %s', (_, base, head) => {
      expect.assertions(1);

      expect(findUpdates(versions(base), versions(head))).toStrictEqual([]);
    });
  });
});
