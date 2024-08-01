const baseConfig = require('@myparcel/semantic-release-config');
const {addGitPlugin, addGitHubPlugin} = require('@myparcel/semantic-release-config/src/plugins');
const {gitPluginDefaults} = require('@myparcel/semantic-release-config/src/plugins/addGitPlugin');

module.exports = {
  extends: '@myparcel/semantic-release-config',
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    addGitPlugin({
      assets: [...gitPluginDefaults.assets, './**/dist/**/*'],
    }),
    addGitHubPlugin(),
  ],
};
