import * as core from '@actions/core';
import {COMMENT_MARKER, buildDescription, buildNotesComment, isRebasing, isRewritten} from './description';
import {
  DEFAULT_SECTION_TYPES,
  type Release,
  type ReleaseLine,
  type SectionTypes,
  type Update,
  buildOverrideBlock,
  parseReleaseBody,
  releaseVersion,
  sectionTypesFromConfig,
  selectReleases,
} from './override';
import {existsSync, readFileSync} from 'node:fs';
import {findUpdates, lockedVersions} from './versions';
import {type components} from '@octokit/openapi-webhooks-types';
import {getOctokit} from '@actions/github';
import {join} from 'node:path';
import {lte} from 'semver';

type Octokit = ReturnType<typeof getOctokit>;

type PullRequestEvent = components['schemas'][
  | 'webhook-pull-request-edited'
  | 'webhook-pull-request-opened'
  | 'webhook-pull-request-synchronize'];

const DEPENDABOT = 'dependabot[bot]';
const PAGE_SIZE = 100;
const NOT_FOUND = 404;

const ownerAndRepo = (fullName: string): {owner: string; repo: string} => {
  const [owner, repo] = fullName.split('/');

  return {owner, repo};
};

// The composite action writes the CLI output for the base and head checkouts into VERSIONS_DIR.
const readOutput = (side: 'base' | 'head', tool: 'composer' | 'pnpm'): unknown => {
  const path = join(process.env.VERSIONS_DIR ?? '', `${side}-${tool}.json`);

  return existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : undefined;
};

/**
 * Get the releases of a package, newest first, until a page holds a release of that package at or below the old version.
 */
const fetchReleases = (octokit: Octokit, update: Update): Promise<Release[]> =>
  octokit.paginate(
    octokit.rest.repos.listReleases,
    {...ownerAndRepo(update.upstream.repo), per_page: PAGE_SIZE},
    (response, done) => {
      // Only a release of this package counts: the JS-PDK repo has releases of every package.
      const reachesFrom = response.data.some(({tag_name: tag}) => {
        const version = releaseVersion(update.upstream, tag);

        return version !== undefined && lte(version, update.from);
      });

      if (reachesFrom) {
        done();
      }

      return response.data;
    },
  );

/**
 * Get the heading → type map of a release from the upstream release-please config at its tag.
 */
const fetchSectionTypes = async (octokit: Octokit, update: Update, tag: string): Promise<SectionTypes> => {
  try {
    const {data} = await octokit.rest.repos.getContent({
      ...ownerAndRepo(update.upstream.repo),
      path: 'release-please-config.json',
      ref: tag,
    });
    const content = 'content' in data ? Buffer.from(data.content, 'base64').toString('utf8') : '{}';

    return sectionTypesFromConfig(JSON.parse(content), update.name) ?? DEFAULT_SECTION_TYPES;
  } catch (error) {
    // No config yet: upstream still releases with semantic-release.
    if ((error as {status?: number}).status === NOT_FOUND) {
      return DEFAULT_SECTION_TYPES;
    }

    throw error;
  }
};

/**
 * Build the override block from the upstream releases of each PDK and JS-PDK package that the PR updates.
 */
const buildOverride = async (octokit: Octokit, title: string): Promise<string> => {
  const base = lockedVersions(readOutput('base', 'composer'), readOutput('base', 'pnpm'));
  const head = lockedVersions(readOutput('head', 'composer'), readOutput('head', 'pnpm'));
  const lines: ReleaseLine[] = [];

  for (const update of findUpdates(base, head)) {
    for (const release of selectReleases(await fetchReleases(octokit, update), update)) {
      const types = await fetchSectionTypes(octokit, update, release.tag_name);

      lines.push(...(await parseReleaseBody(release.body ?? '', types, update.name)));
    }
  }

  return buildOverrideBlock(lines, title);
};

const run = async (): Promise<void> => {
  const octokit = getOctokit(core.getInput('token'));
  const event = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH ?? '', 'utf8')) as PullRequestEvent;

  if (!event.pull_request) {
    throw new Error('No pull_request in the event payload. Run this action on the pull_request_target event.');
  }

  const {number, body, user, html_url: url, title} = event.pull_request;
  const original = body ?? '';

  core.setOutput('rewritten', 'false');

  if (
    user?.login !== DEPENDABOT ||
    event.sender.login !== DEPENDABOT ||
    isRewritten(original) ||
    isRebasing(original)
  ) {
    return;
  }

  const repo = ownerAndRepo(event.repository.full_name);

  const [{data: commits}, {data: comments}] = await Promise.all([
    octokit.rest.pulls.listCommits({...repo, pull_number: number, per_page: PAGE_SIZE}),
    octokit.rest.issues.listComments({...repo, issue_number: number, per_page: PAGE_SIZE}),
  ]);

  // The list is oldest first, so the last Dependabot commit is the newest.
  const latest = commits.filter(({author}) => author?.login === DEPENDABOT).pop();

  if (!latest) {
    return;
  }

  // Save the notes first, so they are not lost when the description call fails.
  const existing = comments.find((comment) => comment.body?.includes(COMMENT_MARKER));
  const notes = buildNotesComment(original, url);

  await (existing
    ? octokit.rest.issues.updateComment({...repo, comment_id: existing.id, body: notes})
    : octokit.rest.issues.createComment({...repo, issue_number: number, body: notes}));

  const override = core.getInput('commit-override') === 'true' ? await buildOverride(octokit, title) : undefined;

  await octokit.rest.pulls.update({
    ...repo,
    pull_number: number,
    body: buildDescription(latest.commit.message, override),
  });

  core.setOutput('rewritten', 'true');
};

run().catch((e: unknown) => {
  core.setFailed(e instanceof Error ? e.message : String(e));
});
