import {type Update, findUpstream} from './override';
import {gt, rcompare, valid} from 'semver';

interface ComposerShow {
  locked?: {name: string; version: string}[];
}

interface PnpmNode {
  dependencies?: Record<string, PnpmNode>;
  devDependencies?: Record<string, PnpmNode>;
  version?: string;
}

const add = (locked: Map<string, string[]>, name: string, version: string): void => {
  const known = locked.get(name) ?? [];

  if (!known.includes(version)) {
    locked.set(name, [...known, version]);
  }
};

const walk = (locked: Map<string, string[]>, node: PnpmNode): void => {
  for (const [name, child] of Object.entries({...node.dependencies, ...node.devDependencies})) {
    if (child.version) {
      add(locked, name, child.version);
    }

    walk(locked, child);
  }
};

/**
 * Get every locked version per package from the JSON output of `composer show --locked` and `pnpm list --lockfile-only`.
 * Either output may be missing.
 */
export const lockedVersions = (composerShow: unknown, pnpmList: unknown): Map<string, string[]> => {
  const locked = new Map<string, string[]>();

  for (const {name, version} of (composerShow as ComposerShow | undefined)?.locked ?? []) {
    add(locked, name, version);
  }

  for (const project of (pnpmList as PnpmNode[] | undefined) ?? []) {
    walk(locked, project);
  }

  return locked;
};

// Any version that is not semver, like dev-main, makes the range unknown.
const highest = (versions: string[] = []): string | undefined =>
  versions.length > 0 && versions.every((version) => valid(version)) ? [...versions].sort(rcompare)[0] : undefined;

/**
 * Get the PDK and JS-PDK packages whose highest locked version went up between the base and the head of a PR.
 */
export const findUpdates = (base: Map<string, string[]>, head: Map<string, string[]>): Update[] =>
  [...head.keys()]
    .map((name) => ({name, from: highest(base.get(name)), to: highest(head.get(name)), upstream: findUpstream(name)}))
    .filter((update): update is Update =>
      Boolean(update.upstream && update.from && update.to && gt(update.to, update.from)),
    )
    .sort((a, b) => a.name.localeCompare(b.name));
