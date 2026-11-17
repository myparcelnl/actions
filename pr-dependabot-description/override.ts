import {compare, gt, lte, prerelease, valid} from 'semver';
import {parseChangelog} from 'changelog-parser';
import {type components} from '@octokit/openapi-types';

export interface Upstream {
  repo: string;
  tags: (version: string) => string[];
}

export interface Update {
  from: string;
  name: string;
  to: string;
  upstream: Upstream;
}

export type Release = Pick<components['schemas']['release'], 'body' | 'tag_name'>;

// Changelog heading → conventional commit type.
export type SectionTypes = Record<string, string>;

interface ChangelogSection {
  section: string;
  type: string;
}

interface ReleasePleaseConfig {
  'changelog-sections'?: ChangelogSection[];
  'package-name'?: string;
  packages?: Record<string, ReleasePleaseConfig>;
}

const JS_PDK_PREFIX = '@myparcel-dev/pdk-';

// The headings upstream uses without a release-please config, compared without a leading emoji or :shortcode:.
export const DEFAULT_SECTION_TYPES: SectionTypes = {
  'New Features': 'feat',
  Features: 'feat',
  'Bug Fixes': 'fix',
  'Performance Improvements': 'perf',
  Reverts: 'revert',
};

const stripEmoji = (heading: string): string => heading.replace(/^(?::\w+:|[^\p{L}])+/u, '').trim();

/**
 * Get the upstream repo and tag formats of a PDK or JS-PDK package, or undefined for any other package.
 */
export const findUpstream = (name: string): Upstream | undefined => {
  if (name === 'myparcelnl/pdk') {
    return {repo: 'myparcelnl/pdk', tags: (version) => [`v${version}`]};
  }

  if (name.startsWith(JS_PDK_PREFIX)) {
    const short = name.slice(JS_PDK_PREFIX.length);

    return {repo: 'myparcelnl/js-pdk', tags: (version) => [`${short}@${version}`, `${name}@${version}`]};
  }

  return undefined;
};

/**
 * Get the version of a release tag, or undefined when the tag is not a release of the upstream package.
 */
export const releaseVersion = (upstream: Upstream, tag: string): string | undefined => {
  // The version follows the last "@" (JS-PDK) or is the whole tag (PDK, valid() drops the "v"). A package name can
  // hold a digit, like bootstrap4.
  const version = valid(tag.slice(tag.lastIndexOf('@') + 1));

  return version !== null && upstream.tags(version).includes(tag) ? version : undefined;
};

/**
 * Get the releases of a package after the old version up to and including the new version, oldest first.
 */
export const selectReleases = (releases: Release[], update: Update): Release[] => {
  // Skip prereleases in a stable range, so their lines do not repeat in the stable release.
  const withPrereleases = prerelease(update.to) !== null;

  return releases
    .map((release) => ({release, version: releaseVersion(update.upstream, release.tag_name)}))
    .filter(
      (item): item is {release: Release; version: string} =>
        item.version !== undefined &&
        (withPrereleases || prerelease(item.version) === null) &&
        gt(item.version, update.from) &&
        lte(item.version, update.to),
    )
    .sort((a, b) => compare(a.version, b.version))
    .map(({release}) => release);
};

/**
 * Get the heading → type map from an upstream release-please config, or undefined when it has no changelog sections.
 * The entry of the package overrides the top level.
 */
export const sectionTypesFromConfig = (config: unknown, name: string): SectionTypes | undefined => {
  const root = (config ?? {}) as ReleasePleaseConfig;
  const short = name.startsWith(JS_PDK_PREFIX) ? name.slice(JS_PDK_PREFIX.length) : undefined;
  const entry = Object.entries(root.packages ?? {}).find(
    ([path, pkg]) => pkg['package-name'] === name || (short !== undefined && path.split('/').pop() === short),
  )?.[1];
  const sections = entry?.['changelog-sections'] ?? root['changelog-sections'];

  return sections && Object.fromEntries(sections.map(({section, type}) => [section, type]));
};

/**
 * Get the conventional commit lines from the body of a GitHub release, one per changelog entry.
 */
export const parseReleaseBody = async (body: string, types: SectionTypes): Promise<string[]> => {
  const {versions} = await parseChangelog({text: body, removeMarkdown: false});
  const lines: string[] = [];

  for (const [heading, items] of Object.entries(versions[0]?.parsed ?? {})) {
    const type = types[heading] ?? types[stripEmoji(heading)];

    if (heading === '_' || !type) {
      continue;
    }

    for (const item of items) {
      const [, scope, message] = /^[*-] (?:\*\*([^*]+):\*\* )?(.*)$/s.exec(item) ?? [undefined, undefined, item];
      // Cut the links to the PR and the commit that release-please adds after the message.
      const cut = message.indexOf(' ([');

      lines.push(`${type}${scope ? `(${scope})` : ''}: ${cut === -1 ? message : message.slice(0, cut)}`);
    }
  }

  return lines;
};

/**
 * Build the BEGIN_COMMIT_OVERRIDE block that release-please reads in place of the commit message.
 */
export const buildOverrideBlock = (lines: string[], title: string): string => {
  // A breaking change upstream is never a breaking change of the plugin. A change released in more than one JS-PDK
  // package gives the same line in each release, so keep each line once.
  const entries = lines.length
    ? [...new Set(lines.map((line) => line.replace(/^(\w+(?:\([^)]*\))?)!:/, '$1:')))]
    : [title];

  return `BEGIN_COMMIT_OVERRIDE\n${entries.join('\n\n')}\nEND_COMMIT_OVERRIDE`;
};
