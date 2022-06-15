let ncc = require('@vercel/ncc');
const fs = require('fs');
const path = require('path');

const IGNORE_DIRS = ['node_modules'];

(async() => {
  const promises = fs
    .readdirSync(__dirname)
    // Check if file/dir is a directory
    .filter(file => fs.statSync(path.resolve(__dirname, file)).isDirectory())
    // Check if dir does not start with . and is not present in IGNORE_DIRS
    .filter(dir => !dir.startsWith('.') || IGNORE_DIRS.includes(dir))
    // Check if action has an index.js file
    .filter(action => fs.existsSync(path.resolve(__dirname, action, 'index.js')))
    .map(async action => {
      const actionDir = path.resolve(__dirname, action);
      let distDir = path.resolve(actionDir, 'dist');

      console.log(`Compiling JS action: ${action}`);
      const result = await ncc(path.resolve(actionDir, 'index.js'), { minify: true });

      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
      }

      fs.writeFileSync(path.resolve(distDir, 'index.js'), result.code);
    });

  await Promise.all(promises);
})();

