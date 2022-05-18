const { major, minor, prerelease } = require('semver');
const { spawnSync } = require('child_process');

const [, , version] = process.argv;

(() => {
  if (prerelease(version)) {
    console.info('Prerelease version detected; will not add a major version tag.');
    return;
  }

  const versionTags = [major(version), `${major(version)}.${minor(version)}`];

  for (const v of versionTags) {
    console.info(`Deleting tag v${v} from origin.`);
    spawnSync('git', ['push', 'origin', `:refs/tags/v${v}`], { stdio: 'inherit' });

    console.info(`Pushing new tag v${v} to git.`);
    spawnSync('git', ['tag', '--force', `v${v}`], { stdio: 'inherit' });
    spawnSync('git', ['push', 'origin', `v${v}`], { stdio: 'inherit' });
  }
})();
