import {
  DEFAULT_SECTION_TYPES,
  type Release,
  type Upstream,
  buildOverrideBlock,
  findUpstream,
  parseReleaseBody,
  releaseVersion,
  sectionTypesFromConfig,
  selectReleases,
} from './override';
import {describe, expect, it} from 'vitest';
import {join} from 'node:path';
import {readFileSync} from 'node:fs';

const fixture = (name: string): string => readFileSync(join(__dirname, 'fixtures', name), 'utf8');

const release = (tag: string, body: string | null = ''): Release => ({tag_name: tag, body});

const parse = (body: string, name = '@myparcel-dev/pdk-admin'): Promise<string[]> =>
  parseReleaseBody(body, DEFAULT_SECTION_TYPES, name);

describe('override', () => {
  describe('releaseVersion', () => {
    const preset = findUpstream('@myparcel-dev/pdk-admin-preset-bootstrap4') as Upstream;
    const pdk = findUpstream('myparcelnl/pdk') as Upstream;

    it.each([
      ['admin-preset-bootstrap4@2.4.2', '2.4.2'],
      ['@myparcel-dev/pdk-admin-preset-bootstrap4@2.4.2', '2.4.2'],
      ['admin-preset-bootstrap4@3.0.0-beta.1', '3.0.0-beta.1'],
    ])('reads %s of a package with a digit in its name', (tag, version) => {
      expect.assertions(1);

      expect(releaseVersion(preset, tag)).toBe(version);
    });

    it.each([
      ['v5.3.0', '5.3.0'],
      ['v5.0.0-beta.1', '5.0.0-beta.1'],
    ])('reads PDK tag %s', (tag, version) => {
      expect.assertions(1);

      expect(releaseVersion(pdk, tag)).toBe(version);
    });

    it.each(['admin@2.4.1', 'admin-preset-bootstrap4', 'v5.3', 'latest'])('rejects %s', (tag) => {
      expect.assertions(1);

      expect(releaseVersion(tag.startsWith('v') ? pdk : preset, tag)).toBeUndefined();
    });
  });

  describe('findUpstream', () => {
    it('knows the PDK', () => {
      expect.assertions(2);

      const upstream = findUpstream('myparcelnl/pdk');

      expect(upstream?.repo).toBe('myparcelnl/pdk');
      expect(upstream?.tags('5.3.0')).toStrictEqual(['v5.3.0']);
    });

    it('knows JS-PDK packages with both tag formats', () => {
      expect.assertions(2);

      const upstream = findUpstream('@myparcel-dev/pdk-admin');

      expect(upstream?.repo).toBe('myparcelnl/js-pdk');
      expect(upstream?.tags('2.4.1')).toStrictEqual(['admin@2.4.1', '@myparcel-dev/pdk-admin@2.4.1']);
    });

    it('does not know other packages', () => {
      expect.assertions(1);

      expect(findUpstream('vite')).toBeUndefined();
    });
  });

  describe('selectReleases', () => {
    const pdkReleases = ['v5.1.0', 'v5.0.1', 'v5.0.0', 'v5.0.0-beta.1', 'v4.9.4'].map((tag) => release(tag));

    const tagsBetween = (releases: Release[], name: string, from: string, to: string): string[] =>
      selectReleases(releases, {name, from, to, upstream: findUpstream(name) as Upstream}).map(
        ({tag_name: tag}) => tag,
      );

    it('keeps stable releases after from up to and including to, oldest first', () => {
      expect.assertions(1);

      expect(tagsBetween(pdkReleases, 'myparcelnl/pdk', '4.9.4', '5.0.1')).toStrictEqual(['v5.0.0', 'v5.0.1']);
    });

    it('keeps prereleases when the target is a prerelease', () => {
      expect.assertions(1);

      expect(tagsBetween(pdkReleases, 'myparcelnl/pdk', '4.9.4', '5.0.0-beta.1')).toStrictEqual(['v5.0.0-beta.1']);
    });

    it('skips releases of other JS-PDK packages', () => {
      expect.assertions(1);

      const releases = ['admin@2.4.1', 'checkout@2.2.3', '@myparcel-dev/pdk-common@2.3.1', 'admin@2.4.0'].map((tag) =>
        release(tag),
      );
      expect(tagsBetween(releases, '@myparcel-dev/pdk-admin', '2.2.0', '2.4.1')).toStrictEqual([
        'admin@2.4.0',
        'admin@2.4.1',
      ]);
    });
  });

  describe('parseReleaseBody', () => {
    it('reads features and fixes, and skips the breaking changes section', async () => {
      expect.assertions(4);

      const lines = await parse(fixture('pdk-v5.0.0.md'));

      expect(lines[0]).toBe('feat: resolve carrier, package type and delivery type mappings through the SDK');
      expect(lines).toContain(
        'fix: the delivery options v1 resource sends direct return as `returnOnFirstFailedDelivery` instead of `printReturnLabelAtDropOff`',
      );
      expect(lines).toHaveLength(4);
      expect(lines.some((line) => line.includes('removed'))).toBe(false);
    });

    it('keeps the scope', async () => {
      expect.assertions(1);

      expect(await parse(fixture('pdk-v5.3.0.md'))).toStrictEqual([
        'feat(customs): send the external product reference per customs item',
      ]);
    });

    it('reads JS-PDK headings without emoji', async () => {
      expect.assertions(1);

      expect(await parse(fixture('js-pdk-admin-2.4.1.md'))).toStrictEqual([
        'fix(admin): offer the €100 insurance tier in the shipment options form',
      ]);
    });

    it('reads only the section of the updated package in a JS-PDK group release', async () => {
      expect.assertions(2);

      const body = fixture('js-pdk-admin-2.2.8.md');

      expect(await parse(body)).toStrictEqual([]);
      expect(await parse(body, '@myparcel-dev/pdk-admin-preset-default')).toStrictEqual([
        'fix(admin-component-tests): fix the drop-off input test and the disabled check',
      ]);
    });

    it('reads list items written with a dash', async () => {
      expect.assertions(1);

      expect(
        await parse('## 2.3.0\n\n### Bug Fixes\n\n- **admin:** fix the form ([#1](u))\n- plain fix\n'),
      ).toStrictEqual(['fix(admin): fix the form', 'fix: plain fix']);
    });

    it('returns nothing for a release with only a header', async () => {
      expect.assertions(1);

      expect(
        await parse('## [5.3.2](https://github.com/myparcelnl/pdk/compare/v5.3.1...v5.3.2) (2026-11-13)\n'),
      ).toStrictEqual([]);
    });

    it('reads a body with CRLF line endings', async () => {
      expect.assertions(1);

      expect(await parse('## 2.3.0\r\n\r\n### Bug Fixes\r\n\r\n* **admin:** fix the form ([#1](u))\r\n')).toStrictEqual(
        ['fix(admin): fix the form'],
      );
    });

    it('uses the headings of an upstream config', async () => {
      expect.assertions(2);

      const body = '## 6.0.0\n\n### ✨ New Features\n\n* **x:** y ([#1](u))\n\n### Other\n\n* z';

      expect(await parseReleaseBody(body, {'✨ New Features': 'feat'}, 'myparcelnl/pdk')).toStrictEqual(['feat(x): y']);
      expect(await parseReleaseBody(body, {Unknown: 'feat'}, 'myparcelnl/pdk')).toStrictEqual([]);
    });
  });

  describe('sectionTypesFromConfig', () => {
    const sections = [
      {type: 'feat', section: '✨ New Features'},
      {type: 'docs', section: 'Docs', hidden: true},
    ];

    it('inverts the top level sections', () => {
      expect.assertions(1);

      expect(sectionTypesFromConfig({'changelog-sections': sections}, 'myparcelnl/pdk')).toStrictEqual({
        '✨ New Features': 'feat',
        Docs: 'docs',
      });
    });

    it('uses the sections of the package entry first', () => {
      expect.assertions(2);

      const config = {
        'changelog-sections': sections,
        packages: {
          'apps/admin': {'changelog-sections': [{type: 'fix', section: 'Fixes'}]},
          'libs/common': {
            'package-name': '@myparcel-dev/pdk-common',
            'changelog-sections': [{type: 'perf', section: 'Speed'}],
          },
        },
      };

      expect(sectionTypesFromConfig(config, '@myparcel-dev/pdk-admin')).toStrictEqual({Fixes: 'fix'});
      expect(sectionTypesFromConfig(config, '@myparcel-dev/pdk-common')).toStrictEqual({Speed: 'perf'});
    });

    it('returns undefined without changelog sections', () => {
      expect.assertions(2);

      expect(sectionTypesFromConfig({}, 'myparcelnl/pdk')).toBeUndefined();
      expect(sectionTypesFromConfig(undefined, 'myparcelnl/pdk')).toBeUndefined();
    });
  });

  describe('buildOverrideBlock', () => {
    it('puts each line in the block', () => {
      expect.assertions(1);

      expect(buildOverrideBlock(['feat: a', 'fix: b'], 'build(deps): bump x')).toBe(
        'BEGIN_COMMIT_OVERRIDE\nfeat: a\n\nfix: b\nEND_COMMIT_OVERRIDE',
      );
    });

    it('keeps a line that two packages share once, at its first place', () => {
      expect.assertions(1);

      expect(buildOverrideBlock(['feat: a', 'fix: b', 'feat: a', 'fix(x)!: c', 'fix(x): c'], 't')).toBe(
        'BEGIN_COMMIT_OVERRIDE\nfeat: a\n\nfix: b\n\nfix(x): c\nEND_COMMIT_OVERRIDE',
      );
    });

    it('holds the title when there are no lines', () => {
      expect.assertions(1);

      expect(buildOverrideBlock([], 'build(deps): bump x')).toBe(
        'BEGIN_COMMIT_OVERRIDE\nbuild(deps): bump x\nEND_COMMIT_OVERRIDE',
      );
    });

    it('never marks a breaking change', () => {
      expect.assertions(1);

      expect(buildOverrideBlock(['feat(x)!: y', 'fix!: z'], 't')).not.toMatch(/!:/);
    });
  });
});
