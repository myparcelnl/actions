import * as core from '@actions/core';
import {COMMENT_MARKER, buildDescription, buildNotesComment, isRebasing, isRewritten} from './description';
import {readFileSync} from 'node:fs';

const DEPENDABOT = 'dependabot[bot]';
const API = 'https://api.github.com';

/* eslint-disable @typescript-eslint/naming-convention -- shape of the GitHub event payload */
interface PullRequestEvent {
  pull_request: {body: string | null; html_url: string; number: number; user: {login: string}};
  repository: {full_name: string};
  sender: {login: string};
}
/* eslint-enable @typescript-eslint/naming-convention */

interface PullRequestCommit {
  author: {login: string} | null;
  commit: {message: string};
}

interface IssueComment {
  body?: string;
  id: number;
}

/**
 * Call the GitHub REST API and return the parsed JSON response. Throws with the status and path on a failed call.
 */
const request = async <T>(token: string, method: string, path: string, body?: unknown): Promise<T> => {
  const response = await fetch(`${API}${path}`, {
    method,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`GitHub API ${method} ${path} failed with status ${response.status}: ${await response.text()}`);
  }

  return (await response.json()) as T;
};

const run = async (): Promise<void> => {
  const token = core.getInput('token');
  const event = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH ?? '', 'utf8')) as PullRequestEvent;

  if (!event.pull_request) {
    throw new Error('No pull_request in the event payload. Run this action on the pull_request_target event.');
  }

  const {number, body, user, html_url: url} = event.pull_request;
  const original = body ?? '';

  core.setOutput('rewritten', 'false');

  if (user.login !== DEPENDABOT || event.sender.login !== DEPENDABOT || isRewritten(original) || isRebasing(original)) {
    return;
  }

  const repo = `/repos/${event.repository.full_name}`;

  const [commits, comments] = await Promise.all([
    request<PullRequestCommit[]>(token, 'GET', `${repo}/pulls/${number}/commits?per_page=100`),
    request<IssueComment[]>(token, 'GET', `${repo}/issues/${number}/comments?per_page=100`),
  ]);

  // The list is oldest first, so the last Dependabot commit is the newest.
  const latest = commits.filter(({author}) => author?.login === DEPENDABOT).pop();

  if (!latest) {
    return;
  }

  // Save the notes first, so they are not lost when the description call fails.
  const existing = comments.find((comment) => comment.body?.includes(COMMENT_MARKER));
  const notes = {body: buildNotesComment(original, url)};

  const [method, path] = existing
    ? ['PATCH', `${repo}/issues/comments/${existing.id}`]
    : ['POST', `${repo}/issues/${number}/comments`];

  await request(token, method, path, notes);

  await request(token, 'PATCH', `${repo}/pulls/${number}`, {body: buildDescription(latest.commit.message)});

  core.setOutput('rewritten', 'true');
};

run().catch((e: unknown) => {
  core.setFailed(e instanceof Error ? e.message : String(e));
});
