const core = require('@actions/core');

const { major, minor, prerelease, valid } = require('semver');
const { spawn } = require('child_process');
const os = require('os');

const remoteRepo = `https://${process.env.GITHUB_ACTOR}:${process.env.GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}.git`;

const run = (command, args) => {
  return new Promise((resolve, reject) => {
    if (core.isDebug()) {
      core.info(`Running "${command}" with args: ${JSON.stringify(args)}`);
    }

    const child = spawn(command, args);
    let content = '';
    const errors = [];

    child.on('error', (error) => {
      reject(error);
    });

    child.stderr.on('data', (chunk) => errors.push(chunk));
    child.stdout.on('data', (chunk) => {
      content += chunk.toString();
    });

    child.on('exit', (code) => {
      if (code === 0) {
        if (core.isDebug()) {
          core.info('Result: ' + content.trim());
        }

        resolve(content.trim());
      } else {
        reject(new Error(`${errors.join('')}${os.EOL}${command} exited with code ${code}`));
      }
    });
  });
};

const updateTags = async() => {
  const lastTagRef = await run('git', ['rev-list', '--tags', '--max-count=1']);
  const version = await run('git', ['describe', '--tags', lastTagRef]);

  const updateMajor = core.getBooleanInput('major');
  const updateMinor = core.getBooleanInput('minor');

  if (!valid(version)) {
    core.error('Passed version "' + version + '" is not valid.');
    return;
  }

  if (prerelease(version)) {
    core.info('Prerelease version detected; will not add a major version tag.');
    return;
  }

  const versionTags = [];

  if (updateMajor) {
    versionTags.push(major(version));
  }

  if (updateMinor) {
    versionTags.push(`${major(version)}.${minor(version)}`);
  }

  const ref = await run('git', ['show-ref', '-s', version]);

  await Promise.all(versionTags.map(async tag => {
    const tagName = `v${tag}`.trim();

    const exists = await run('git', ['tag', '-l', tag]);

    console.log(exists);

    if (exists) {
      core.info(`Deleting tag "${tagName}"`);
      await run('git', ['push', remoteRepo, `:refs/tags/v${tagName}`]);
    }

    if (exists) {
      core.info(`Moving tag "${tagName}" to ${ref}`);
    } else {
      core.info(`Creating new tag "${tagName}" on ${ref}`);
    }

    await run('git', ['tag', '--force', `v${tagName}`, ref]);
  }));

  core.info('Pushing tags');
  await run('git', ['push', remoteRepo, '--tags']);
};

try {
  updateTags();
} catch (e) {
  core.setFailed(e.message);
}
