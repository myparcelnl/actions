import * as core from '@actions/core';
import {COMMENT_MARKER, DESCRIPTION_MARKER, buildDescription, buildNotesComment} from './description';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {getOutput, setEnv, setInputs} from '../private/test';
import {mkdtempSync, readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';

// A closed local port: a request that gets past the fetch mock fails here and never reaches GitHub.
const API_URL = vi.hoisted(() => {
  const url = 'http://127.0.0.1:9';

  process.env.GITHUB_API_URL = url;

  return url;
});

// @actions/github gives Octokit its own undici fetch, so route every request through the stubbed global fetch.
vi.mock('@actions/github', async (importActual) => {
  const actual = await importActual<typeof import('@actions/github')>();

  return {
    ...actual,
    getOctokit: (token: string) =>
      actual.getOctokit(token, {
        baseUrl: API_URL,
        request: {fetch: (...args: Parameters<typeof fetch>) => fetch(...args)},
      }),
  };
});

const BASE = `${API_URL}/repos/myparcelnl/example`;
const ORIGINAL_BODY = 'Bumps [vite](https://github.com/vitejs/vite) from 5.4.21 to 6.4.3.\n\nLong release notes';
const HTML_URL = 'https://github.com/myparcelnl/example/pull/7';
const TITLE = 'build(deps): bump myparcelnl/pdk from 5.1.0 to 5.3.0';

const fixture = (name: string): string => readFileSync(join(__dirname, 'fixtures', name), 'utf8');

const PDK_MESSAGE = 'build(deps): bump myparcelnl/pdk\n\nUpdates `myparcelnl/pdk` from 5.1.0 to 5.3.0';

const composerShow = (version: string): unknown => ({locked: [{name: 'myparcelnl/pdk', version}]});

// Write the CLI output that the composite action leaves in VERSIONS_DIR.
const writeVersions = (files: Record<string, unknown>): void => {
  const dir = mkdtempSync(join(tmpdir(), 'versions-'));

  for (const [name, content] of Object.entries(files)) {
    writeFileSync(join(dir, `${name}.json`), JSON.stringify(content));
  }

  setEnv('VERSIONS_DIR', dir);
};

interface EventOptions {
  author?: string;
  body?: string;
  sender?: string;
}

interface Call {
  body?: unknown;
  method: string;
  url: string;
}

// The entry point does not await run(), so wait until the mocked API calls have settled.
const runAction = async (): Promise<void> => {
  await import('./index');
  await new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
};

const writeEventFile = (event: unknown): void => {
  const path = join(mkdtempSync(join(tmpdir(), 'event-')), 'event.json');

  writeFileSync(path, JSON.stringify(event));
  setEnv('GITHUB_EVENT_PATH', path);
};

const writeEvent = ({
  author = 'dependabot[bot]',
  body = ORIGINAL_BODY,
  sender = 'dependabot[bot]',
}: EventOptions): void => {
  writeEventFile({
    pull_request: {number: 7, title: TITLE, body, user: {login: author}, html_url: HTML_URL},
    sender: {login: sender},
    repository: {full_name: 'myparcelnl/example'},
  });
};

const findDescriptionPatch = (calls: Call[]): Call | undefined =>
  calls.find(({method, url}) => method === 'PATCH' && url === `${BASE}/pulls/7`);

const commit = (login: string, message: string): {author: {login: string}; commit: {message: string}} => ({
  author: {login},
  commit: {message},
});

interface MockOptions {
  comments?: unknown[];
  commits?: unknown[];
  failDescription?: boolean;
  // release-please-config.json per upstream repo; a missing repo gives a 404.
  configs?: Record<string, unknown>;
  // Pages of releases per upstream repo, page 1 first.
  releases?: Record<string, unknown[][]>;
}

const respond = (status: number, json: unknown = {}, headers: Record<string, string> = {}): Promise<Response> =>
  Promise.resolve(
    new Response(JSON.stringify(json), {status, headers: {'content-type': 'application/json', ...headers}}),
  );

const route = (method: string, url: string, options: MockOptions): Promise<Response> => {
  const releases = /repos\/(.+?)\/releases\?per_page=100(?:&page=(\d+))?$/.exec(url);

  if (releases) {
    const pages = options.releases?.[releases[1]] ?? [];
    const page = Number(releases[2] ?? 1);
    const next = page < pages.length ? {link: `<${url.replace(/&page=\d+$/, '')}&page=${page + 1}>; rel="next"`} : {};

    return respond(200, pages[page - 1] ?? [], next);
  }

  const config = /repos\/(.+?)\/contents\/release-please-config\.json/.exec(url);

  if (config) {
    const content = options.configs?.[config[1]];

    return content === undefined
      ? respond(404, {message: 'Not Found'})
      : respond(200, {
          type: 'file',
          encoding: 'base64',
          content: Buffer.from(JSON.stringify(content)).toString('base64'),
        });
  }

  if (url.includes('/pulls/7/commits')) {
    return respond(200, options.commits ?? []);
  }

  if (method === 'GET' && url.includes('/issues/7/comments')) {
    return respond(200, options.comments ?? []);
  }

  if (method === 'PATCH' && url.endsWith('/pulls/7') && options.failDescription) {
    return respond(403, {message: 'Resource not accessible by integration'});
  }

  const known = [`${BASE}/issues/7/comments`, `${BASE}/issues/comments/42`, `${BASE}/pulls/7`];

  if (!known.includes(url)) {
    throw new Error(`No mocked route for ${method} ${url}`);
  }

  return respond(200);
};

const mockApi = (options: MockOptions = {}): Call[] => {
  setEnv('VERSIONS_DIR', mkdtempSync(join(tmpdir(), 'versions-')));

  const calls: Call[] = [];

  vi.stubGlobal(
    'fetch',
    vi.fn((url: string, init: {body?: string; method?: string} = {}) => {
      const method = init.method ?? 'GET';

      calls.push({method, url, body: init.body ? JSON.parse(init.body) : undefined});

      return route(method, url, options);
    }),
  );

  return calls;
};

describe('pr-dependabot-description', () => {
  beforeEach(() => {
    vi.resetModules();
    setInputs({token: 'secret'});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('does nothing for a PR by someone else', async () => {
    expect.assertions(2);

    writeEvent({author: 'freek', sender: 'freek'});
    const calls = mockApi();

    await runAction();

    expect(calls).toHaveLength(0);
    expect(getOutput('rewritten')).toBe('false');
  });

  it('does nothing when a person edits a Dependabot PR', async () => {
    expect.assertions(2);

    writeEvent({sender: 'freek'});
    const calls = mockApi();

    await runAction();

    expect(calls).toHaveLength(0);
    expect(getOutput('rewritten')).toBe('false');
  });

  it('does nothing when the description is already rewritten', async () => {
    expect.assertions(2);

    writeEvent({body: `short\n\n${DESCRIPTION_MARKER}`});
    const calls = mockApi();

    await runAction();

    expect(calls).toHaveLength(0);
    expect(getOutput('rewritten')).toBe('false');
  });

  it('does nothing while Dependabot rebases the PR', async () => {
    expect.assertions(2);

    writeEvent({
      body: `[//]: # (dependabot-start)\n⚠️  **Dependabot is rebasing this PR** ⚠️\n\n[//]: # (dependabot-end)\n\n${ORIGINAL_BODY}`,
    });
    const calls = mockApi();

    await runAction();

    expect(calls).toHaveLength(0);
    expect(getOutput('rewritten')).toBe('false');
  });

  it('rewrites a new Dependabot PR', async () => {
    expect.assertions(6);

    writeEvent({});
    const message = 'build(deps): bump vite\n\nBumps vite.\n---\nupdated-dependencies:\n- dependency-name: vite';
    const calls = mockApi({commits: [commit('dependabot[bot]', message)]});

    await runAction();

    const writes = calls.filter(({method}) => method !== 'GET');

    expect(writes).toHaveLength(2);
    expect(writes[0]).toEqual({
      method: 'POST',
      url: `${BASE}/issues/7/comments`,
      body: {body: buildNotesComment(ORIGINAL_BODY, HTML_URL)},
    });
    expect(writes[1]).toEqual({method: 'PATCH', url: `${BASE}/pulls/7`, body: {body: buildDescription(message)}});
    expect(calls.every(({url}) => url.startsWith(BASE))).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({authorization: 'token secret'}),
      }),
    );
    expect(getOutput('rewritten')).toBe('true');
  });

  it("uses the newest Dependabot commit, not a person's", async () => {
    expect.assertions(1);

    writeEvent({});
    const calls = mockApi({
      commits: [commit('dependabot[bot]', 'subject\n\nfrom A'), commit('freek', 'subject\n\nfrom B')],
    });

    await runAction();

    const patch = findDescriptionPatch(calls);

    expect(patch?.body).toEqual({body: buildDescription('subject\n\nfrom A')});
  });

  it('uses the newest of two Dependabot commits', async () => {
    expect.assertions(1);

    writeEvent({});
    const calls = mockApi({
      commits: [commit('dependabot[bot]', 'subject\n\nolder'), commit('dependabot[bot]', 'subject\n\nnewer')],
    });

    await runAction();

    const patch = findDescriptionPatch(calls);

    expect(patch?.body).toEqual({body: buildDescription('subject\n\nnewer')});
  });

  it('fails the step when the event has no pull request', async () => {
    expect.assertions(2);

    writeEventFile({sender: {login: 'freek'}});
    const calls = mockApi();
    const setFailed = vi.spyOn(core, 'setFailed').mockImplementation(() => undefined);

    await runAction();

    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('pull_request_target'));
    expect(calls).toHaveLength(0);
  });

  it('updates the existing notes comment', async () => {
    expect.assertions(2);

    writeEvent({});
    const calls = mockApi({
      commits: [commit('dependabot[bot]', 'subject\n\nbody')],
      comments: [
        {id: 11, body: 'other'},
        {id: 42, body: `old\n${COMMENT_MARKER}`},
      ],
    });

    await runAction();

    expect(calls.some(({method}) => method === 'POST')).toBe(false);
    expect(calls).toContainEqual({
      method: 'PATCH',
      url: `${BASE}/issues/comments/42`,
      body: {body: buildNotesComment(ORIGINAL_BODY, HTML_URL)},
    });
  });

  it('fails the step when the API refuses', async () => {
    expect.assertions(1);

    writeEvent({});
    mockApi({commits: [commit('dependabot[bot]', 'subject\n\nbody')], failDescription: true});
    const setFailed = vi.spyOn(core, 'setFailed').mockImplementation(() => undefined);

    await runAction();

    expect(setFailed).toHaveBeenCalledWith(expect.stringContaining('Resource not accessible by integration'));
  });

  describe('commit-override', () => {
    const PDK_RELEASES = [
      {tag_name: 'v5.3.2', body: '## [5.3.2](x) (2026-11-13)\n'},
      {tag_name: 'v5.3.0', body: fixture('pdk-v5.3.0.md')},
      {tag_name: 'v5.2.0', body: '## 5.2.0\n\n### :sparkles: New Features\n\n* add the thing'},
      {tag_name: 'v5.1.0', body: '## 5.1.0\n\n### :sparkles: New Features\n\n* older thing'},
    ];

    const descriptionOf = (calls: Call[]): string => (findDescriptionPatch(calls)?.body as {body: string}).body;

    const runOverride = async (
      versions: Record<string, unknown>,
      options: Omit<MockOptions, 'commits'> = {},
      commitOverride = 'true',
    ): Promise<Call[]> => {
      setInputs({token: 'secret', 'commit-override': commitOverride});
      writeEvent({});
      const calls = mockApi({...options, commits: [commit('dependabot[bot]', PDK_MESSAGE)]});

      writeVersions(versions);
      await runAction();

      return calls;
    };

    it('reads no releases when the input is off', async () => {
      expect.assertions(2);

      const calls = await runOverride(
        {'base-composer': composerShow('5.1.0'), 'head-composer': composerShow('5.3.0')},
        {},
        'false',
      );

      expect(calls.some(({url}) => url.includes('/releases'))).toBe(false);
      expect(descriptionOf(calls)).toBe(buildDescription(PDK_MESSAGE));
    });

    it('puts the upstream lines of the locked range in the block, oldest first', async () => {
      expect.assertions(3);

      const calls = await runOverride(
        {'base-composer': composerShow('5.1.0'), 'head-composer': composerShow('5.3.0')},
        {releases: {'myparcelnl/pdk': [PDK_RELEASES]}},
      );

      expect(descriptionOf(calls)).toMatch(
        /^BEGIN_COMMIT_OVERRIDE\nfeat: add the thing\n\nfeat\(customs\): send the external product reference per customs item\nEND_COMMIT_OVERRIDE\n/,
      );
      expect(descriptionOf(calls)).not.toContain('older thing');
      expect(getOutput('rewritten')).toBe('true');
    });

    it('reads a transitive JS-PDK package from the pnpm output', async () => {
      expect.assertions(1);

      const pnpm = (version: string): unknown => [
        {
          devDependencies: {
            '@myparcel-dev/pdk-admin': {version: '2.4.0', dependencies: {'@myparcel-dev/pdk-common': {version}}},
          },
        },
      ];
      const calls = await runOverride(
        {'base-pnpm': pnpm('2.3.0'), 'head-pnpm': pnpm('2.3.1')},
        {
          releases: {
            'myparcelnl/js-pdk': [
              [
                {tag_name: '@myparcel-dev/pdk-common@2.3.1', body: '## 2.3.1\n\n### Bug Fixes\n\n* **common:** fix it'},
                {tag_name: '@myparcel-dev/pdk-common@2.3.0', body: ''},
              ],
            ],
          },
        },
      );

      expect(descriptionOf(calls)).toContain('fix(common): fix it');
    });

    it('reads the next page until the range is covered', async () => {
      expect.assertions(2);

      const newer = Array.from({length: 100}, (_, i) => ({
        tag_name: `v6.0.${i}`,
        body: '## x\n\n### Features\n\n* too new',
      }));
      const calls = await runOverride(
        {'base-composer': composerShow('5.1.0'), 'head-composer': composerShow('5.3.0')},
        {releases: {'myparcelnl/pdk': [newer, PDK_RELEASES]}},
      );

      expect(calls.some(({url}) => url.endsWith('releases?per_page=100&page=2'))).toBe(true);
      expect(descriptionOf(calls)).toContain('feat: add the thing');
    });

    it('does not stop paging at an old release of another JS-PDK package', async () => {
      expect.assertions(1);

      const others = Array.from({length: 99}, (_, i) => ({tag_name: `checkout@3.0.${i}`, body: ''}));
      const page1 = [...others, {tag_name: 'checkout@1.0.0', body: ''}];
      const page2 = [{tag_name: 'admin@2.3.0', body: '## 2.3.0\n\n### Bug Fixes\n\n* **admin:** fix the form'}];
      const pnpm = (version: string): unknown => [{devDependencies: {'@myparcel-dev/pdk-admin': {version}}}];
      const calls = await runOverride(
        {'base-pnpm': pnpm('2.2.0'), 'head-pnpm': pnpm('2.3.0')},
        {releases: {'myparcelnl/js-pdk': [page1, page2]}},
      );

      expect(descriptionOf(calls)).toContain('fix(admin): fix the form');
    });

    it('uses the changelog sections of the upstream config', async () => {
      expect.assertions(2);

      const releases = [
        {tag_name: 'v5.3.0', body: '## 5.3.0\n\n### Shiny\n\n* new thing\n\n### Bug Fixes\n\n* old map'},
      ];
      const calls = await runOverride(
        {'base-composer': composerShow('5.2.0'), 'head-composer': composerShow('5.3.0')},
        {
          releases: {'myparcelnl/pdk': [releases]},
          configs: {'myparcelnl/pdk': {'changelog-sections': [{type: 'feat', section: 'Shiny'}]}},
        },
      );

      expect(descriptionOf(calls)).toContain('feat: new thing');
      expect(descriptionOf(calls)).not.toContain('old map');
    });

    it.each([
      [
        'an update of another package',
        {
          'base-composer': {locked: [{name: 'vite', version: '5.4.21'}]},
          'head-composer': {locked: [{name: 'vite', version: '6.4.3'}]},
        },
      ],
      ['no CLI output', {}],
    ])('puts only the title in the block for %s', async (_, versions) => {
      expect.assertions(2);

      const calls = await runOverride(versions);

      expect(descriptionOf(calls)).toMatch(
        new RegExp(`^BEGIN_COMMIT_OVERRIDE\\n${TITLE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\nEND_COMMIT_OVERRIDE`),
      );
      expect(getOutput('rewritten')).toBe('true');
    });
  });
});
