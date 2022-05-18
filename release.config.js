const baseConfig = require('@myparcel/semantic-release-config');
const { addGitPlugin, addExecPlugin, addGitHubPlugin } = require('@myparcel/semantic-release-config/src/plugins');

module.exports = {
  extends: '@myparcel/semantic-release-config',
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    addExecPlugin({
      'publishCmd': 'node ./publish.js ${nextRelease.version}',
    }),
    addGitPlugin(),
    addGitHubPlugin(),
  ],
};
