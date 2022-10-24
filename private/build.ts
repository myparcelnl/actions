import fs from 'fs';
import path from 'path';
import {build} from 'tsup';

const IGNORE_DIRS = ['node_modules'];

(async () => {
  const directory = process.argv[2] ?? process.cwd();

  const promises = fs
    .readdirSync(directory)
    // Check if file/dir is a directory
    .filter(file => fs.statSync(path.resolve(directory, file)).isDirectory())
    // Check if dir does not start with . and is not present in IGNORE_DIRS
    .filter(dir => !dir.startsWith('.') || IGNORE_DIRS.includes(dir))
    // Check if action has an index.ts file
    .filter(action => fs.existsSync(path.resolve(directory, action, 'index.ts')))
    .map(async action => {
      const actionDir = path.resolve(directory, action);
      let distDir = path.resolve(actionDir, 'dist');

      console.log(`Compiling JS action: ${action}`);
      await build({
        entry: [path.resolve(actionDir, 'index.ts')],
        outDir: distDir,
        target: 'node16',
        minify: true
      });
    });

  if (!promises.length) {
    console.log('No actions to compile found.');
    return;
  }

  await Promise.all(promises);
})();

