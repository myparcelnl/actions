/* eslint-disable no-continue */
import * as core from '@actions/core';
import {major, minor, prerelease, valid} from 'semver';
import os from 'node:os';
import {spawn} from 'node:child_process';

const remoteRepo = `https://${process.env.GITHUB_ACTOR}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`;

const run = (command, args): Promise<string> => {
  return new Promise((resolve, reject) => {
    core.debug(`> ${command} ${args.join(' ')}`);

    const child = spawn(command, args);
    let content = '';
    const errors = [];

    child.on('error', (error) => {
      reject(error);
    });

    child.stderr.on('data', (chunk) => {
      core.error(chunk.toString());
      errors.push(chunk);
    });

    child.stdout.on('data', (chunk) => {
      core.debug(chunk.toString());
      content += chunk.toString();
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve(content.trim());
      } else {
        reject(new Error(`${errors.join('')}${os.EOL}${command} exited with code ${code}`));
      }
    });
  });
};

const findPreviousTag = async (): Promise<string | null> => {
  const tagsString = await run('git', ['rev-list', 'HEAD']);
  const revisions = tagsString.split('\n');

  for (const revision of revisions) {
    const tags = await run('git', ['tag', '--points-at', revision]);

    for (const tag of tags.split('\n')) {
      if (!valid(tag)) {
        continue;
      }

      return tag;
    }
  }

  return null;
};

const updateTags = async (): Promise<void> => {
  const version = await findPreviousTag();

  if (!version) {
    core.info('No previous tag found, skipping tag update');
    return;
  }

  if (prerelease(version)) {
    core.info('Prerelease version detected; will not add a major version tag.');
    return;
  }

  const versionTags = [];
  const updateMajor = core.getBooleanInput('major');
  const updateMinor = core.getBooleanInput('minor');

  if (updateMajor) {
    versionTags.push(major(version));
  }

  if (updateMinor) {
    versionTags.push(`${major(version)}.${minor(version)}`);
  }

  const ref = await run('git', ['show-ref', '-s', version]);

  await Promise.all(
    versionTags.map(async (tag) => {
      const tagName = `v${tag}`.trim();
      const exists = Boolean(await run('git', ['ls-remote', remoteRepo, tagName]));

      if (exists) {
        core.info(`Deleting tag "${tagName}"`);
        await run('git', ['push', remoteRepo, `:refs/tags/${tagName}`]);
      }

      if (exists) {
        core.info(`Moving tag "${tagName}" to ${ref}`);
      } else {
        core.info(`Creating new tag "${tagName}" on ${ref}`);
      }

      await run('git', ['tag', '--force', `${tagName}`, ref]);
    }),
  );

  core.info('Pushing tags');
  await run('git', ['push', remoteRepo, '--tags']);
};

try {
  void updateTags();
} catch (e) {
  core.setFailed(e.message);
}
