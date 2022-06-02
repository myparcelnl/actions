const core = require('@actions/core');

const { major, minor, prerelease } = require('semver');
const { spawnSync } = require('child_process');

const updateTags = () => {
  const lastTagRef = spawnSync('git', ['rev-list', '--tags', '--max-count=1']).stdout.toString().trim();
  const version = spawnSync('git', ['describe', '--tags', lastTagRef]).stdout.toString().trim();

  const updateMajor = core.getBooleanInput('major');
  const updateMinor = core.getBooleanInput('minor');

  if (prerelease(version)) {
    core.info('Prerelease version detected; will not add a major version update-tags.');
    return;
  }

  const versionTags = [];

  if (updateMajor) {
    versionTags.push(major(version));
  }

  if (updateMinor) {
    versionTags.push(`${major(version)}.${minor(version)}`);
  }

  const ref = spawnSync('git', ['show-ref', '-s', version]).stdout.toString();

  versionTags.forEach(tag => {
    const tagName = `v${tag}`;

    core.info(`Deleting tag "${tagName}"`);
    spawnSync('git', ['push', 'origin', `:refs/tags/v${tagName}`], { stdio: 'inherit' });

    core.info(`Creating new tag "${tagName}" on ${ref}`);
    spawnSync('git', ['tag', '--force', `v${tagName}`, ref], { stdio: 'inherit' });
  });

  core.info('Pushing tags');
  spawnSync('git', ['push', '--tags'])
};

try {
  updateTags();
} catch (e) {
  core.setFailed(e.message);
}
