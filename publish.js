#!/bin/node

import { major, minor, prerelease } from 'semver';

const [, , version] = process.argv;

(async() => {
  if (prerelease(version)) {
    console.info('Prerelease version detected; will not add a major version tag.');
    return;
  }

  const versionTags = [major(version), `${major(version)}.${minor(version)}`];

  for (const v of versionTags) {
    console.info(`Deleting version tag ${v} from origin.`);
    await this.shell.exec(`git push origin :refs/tags/v${v}`);

    console.info(`Pushing new version tag ${v} to git.`);
    await this.shell.exec(`git tag --force v${v}`);
    await this.shell.exec(`git push origin v${v}`);
  }
})();
