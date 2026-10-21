import * as core from '@actions/core';
import {COMMENT_MARKER, DESCRIPTION_MARKER, buildDescription, buildNotesComment} from './description';
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import {getOutput, setEnv, setInputs} from '../private/test';
import {mkdtempSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';

const BASE = 'https://api.github.com/repos/myparcelnl/example';
const ORIGINAL_BODY = 'Bumps [vite](https://github.com/vitejs/vite) from 5.4.21 to 6.4.3.\n\nLong release notes';
const HTML_URL = 'https://github.com/myparcelnl/example/pull/7';

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
    pull_request: {number: 7, body, user: {login: author}, html_url: HTML_URL},
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
}

const respond = (status: number, json: unknown = {}): Promise<unknown> =>
  Promise.resolve({
    ok: status < 400,
    status,
    json: () => Promise.resolve(json),
    text: () => Promise.resolve(JSON.stringify(json)),
  });

const route = (method: string, url: string, options: MockOptions): Promise<unknown> => {
  if (url.includes('/pulls/7/commits')) {
    return respond(200, options.commits ?? []);
  }

  if (method === 'GET' && url.includes('/issues/7/comments')) {
    return respond(200, options.comments ?? []);
  }

  if (method === 'PATCH' && url.endsWith('/pulls/7') && options.failDescription) {
    return respond(403, {message: 'Resource not accessible by integration'});
  }

  return respond(200);
};

const mockApi = (options: MockOptions = {}): Call[] => {
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
        headers: expect.objectContaining({Authorization: 'Bearer secret'}),
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

    expect(setFailed).toHaveBeenCalledWith(expect.stringMatching(/pulls\/7 failed with status 403/));
  });
});
