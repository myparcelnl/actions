const { major, minor, prerelease } = require('semver');
const { spawnSync } = require('child_process');

const [, , ...tags] = process.argv;

tags
  .filter((tag) => tag.match(/v?\d+\.\d+\.\d+/))
  .forEach(version => {
    console.log(version);

    if (prerelease(version)) {
      console.info('Prerelease version detected; will not add a major version tag.');
      return;
    }

    const ref = spawnSync('git', ['show-ref', '-s', version]).stdout.toString();
    const versionTags = [major(version), `${major(version)}.${minor(version)}`];

    versionTags.forEach(tag => {
      const tagName = `v${tag}`;

      console.info(`Deleting tag "${tagName}"`);
      spawnSync('git', ['push', 'origin', `:refs/tags/v${tagName}`], { stdio: 'inherit' });

      console.info(`Creating new tag "${tagName}" on ${ref}`);
      spawnSync('git', ['tag', '--force', `v${tagName}`, ref], { stdio: 'inherit' });
    });
  });
