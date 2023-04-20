# GitHub Actions

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/myparcelnl/actions?style=for-the-badge)

This is a collection of reusable composite actions for GitHub Actions workflows.

## Overview

- [General usage](#general-usage)
- [Actions](#actions)
  - [Authentication](#authentication)
    - [setup-app-credentials](#setup-app-credentials)
  - [AWS](#aws)
    - [aws-setup](#aws-setup)
    - [aws-s3-sync](#aws-s3-sync)
  - [Node](#node)
    - [npm-install](#npm-install)
    - [setup-node](#setup-node)
    - [yarn-install](#yarn-install)
    - [yarn2-install](#yarn2-install-deprecated)
  - [PHP](#php)
    - [composer-install](#composer-install)
  - [Testing](#testing)
    - [update-coverage](#update-coverage)
  - [Docker](#docker)
    - [build-docker-image](#build-docker-image)
    - [build-docker-image-reg](#build-docker-image-reg)
  - [Releasing](#releasing)
    - [semantic-release](#semantic-release)
  - [Git](#git)
    - [setup-git-credentials](#setup-git-credentials)
    - [rebase](#rebase)
    - [update-tags](#update-tags)
    - [compare-branches](#compare-branches)
  - [GitHub](#github)
    - [get-github-token](#get-github-token)
    - [pr-assign-author](#pr-assign-author)
    - [pr-label-by-review](#pr-label-by-review)
    - [pr-validate-title-conventional](#pr-validate-title-conventional)
  - [Miscellaneous](#miscellaneous)
    - [bundlewatch](#bundlewatch)
    - [cache-nx](#cache-nx)

## General usage

### Versioning

We use semantic versioning. We will only push breaking changes to major updates.
Minor versions are features, additions and improvements, and patch versions are
bug fixes. **We recommend using a major version.**

| Version | Constraint              |
| ------- | :---------------------- |
| v2      | `>= v2.0.0 && > v3.0.0` |
| v2.0    | `>= v2.0.0 && > v2.1.0` |
| v2.0.0  | `v2.0.0`                |

You can also use `main` to always use the latest actions, but this is not
recommended as this will also include breaking changes.

#### Major example

```yaml
- uses: myparcelnl/actions/yarn-install@v3
```

Will use every minor and patch update within `v2.x.x`.

#### Minor example

```yaml
- uses: myparcelnl/actions/yarn-install@v3
```

Will use every patch update within `v2.1.x`.

## Actions

### Authentication

#### setup-app-credentials

[Source](setup-app-credentials/action.yml)

Generate credentials and git committer details for a [GitHub app].

##### Example

```yaml
- uses: myparcelnl/actions/setup-app-credentials@v3
  with:
    app-id: ${{ secrets.APP_ID }}
    private-key: ${{ secrets.APP_PRIVATE_KEY }}

- uses: namespace/any-other-action
  with:
    token: ${{ steps.setup-app-credentials.outputs.token }}
```

##### Inputs

| Required | Name          | Description                 | Example                          | Default |
| -------- | ------------- | --------------------------- | -------------------------------- | ------- |
| Yes      | `app-id`      | The app ID of the app.      | `${{ secrets.APP_ID }}`          | –       |
| Yes      | `private-key` | The private key of the app. | `${{ secrets.APP_PRIVATE_KEY }}` | –       |

##### Outputs

| Name        | Description                  | Example                                |
| ----------- | ---------------------------- | -------------------------------------- |
| `name`      | The name of the app.         | `my-app`                               |
| `token`     | The GitHub token of the app. | `ghp_1234567890`                       |
| `git-name`  | The name to use with git.    | `my-app[bot]`                          |
| `git-email` | The email to use with git.   | `my-app[bot]@users.noreply.github.com` |

See also [setup-git-credentials] for setting up git using a [GitHub app].

### AWS

#### aws-setup

[Source](aws-setup/action.yml)

Setup AWS credentials for use with other AWS actions.

##### Example

```yaml
- uses: myparcelnl/actions/aws-setup@v3
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: eu-west-1
```

##### Inputs

| Required | Name                    | Description                | Example                                | Default |
| -------- | ----------------------- | -------------------------- | -------------------------------------- | ------- |
| Yes      | `aws-access-key-id`     | The AWS access key ID.     | `${{ secrets.AWS_ACCESS_KEY_ID }}`     | –       |
| Yes      | `aws-secret-access-key` | The AWS secret access key. | `${{ secrets.AWS_SECRET_ACCESS_KEY }}` | –       |
| Yes      | `aws-region`            | The AWS region.            | `eu-west-1`                            | –       |

#### aws-s3-sync

[Source](aws-s3-sync/action.yml)

Sync a directory to an S3 bucket. Must be run after [aws-setup].

##### Example

```yaml
- uses: myparcelnl/actions/aws-setup@v3
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: eu-west-1

- uses: myparcelnl/actions/aws-s3-sync@v3
  with:
    source: dist
    bucket: my-bucket
    delete: true
```

##### Inputs

| Required | Name     | Description                                                                   | Example                     | Default |
| -------- | -------- | ----------------------------------------------------------------------------- | --------------------------- | ------- |
| Yes      | `source` | The directory to sync.                                                        | `dist`                      | –       |
| Yes      | `bucket` | Name of the S3 bucket to sync to.                                             | `${{ secrets.AWS_BUCKET }}` | –       |
| No       | `delete` | Delete files that exist in the destination but not in the source during sync. | `true`                      | `false` |

### Node

#### npm-install

[Source](npm-install/action.yml)

1. Runs [actions/setup-node]
2. Handles `node_modules` cache
3. Runs `npm ci`

##### Example

```yaml
- uses: myparcelnl/actions/npm-install@v3
  with:
    node-version: 18
```

#### yarn-install

Can be used with Yarn 1 and Yarn 2 (berry).

[Source](yarn-install/action.yml)

1. Runs [actions/setup-node]
2. Determines yarn arguments based on yarn version
3. Runs `yarn install <determined-args> <your-args>`

##### Example

```yaml
- uses: myparcelnl/actions/yarn-install@v3
  with:
    node-version: 18
    yarn-args: --ignore-scripts
```

##### Inputs

| Required | Name           | Description                        | Example            | Default |
| -------- | -------------- | ---------------------------------- | ------------------ | ------- |
| No       | `node-version` | The Node.js version to use         | `19`               | `18`    |
| No       | `yarn-args`    | Arguments to use with yarn install | `--ignore-scripts` | ` `     |

#### yarn2-install (deprecated)

> Note: This action is deprecated and just calls [yarn-install]. Use myparcelnl/actions/yarn-install instead.

#### pnpm-install

[Source](pnpm-install/action.yml)

1. Runs [actions/setup-node]
2. Installs pnpm
3. Handles pnpm cache
4. Runs `pnpm install --frozen-lockfile`

##### Example

```yaml
- uses: myparcelnl/actions/pnpm-install@v3
  with:
    node-version: 18
    pnpm-version: 7.4.0
    pnpm-args: --ignore-scripts --frozen-lockfile
```

##### Inputs

| Required | Name           | Description                        | Example                              | Default             |
| -------- | -------------- | ---------------------------------- | ------------------------------------ | ------------------- |
| No       | `node-version` | The Node.js version to use         | `18`                                 | `18`                |
| No       | `pnpm-version` | The pnpm version to use            | `7.4.0`                              | `7.6.0`             |
| No       | `pnpm-args`    | Arguments to use with pnpm install | `--ignore-scripts --frozen-lockfile` | `--frozen-lockfile` |

#### ~~setup-node~~

> ⚠️ Deprecated: use actions/setup-node@v3 instead.

[Source](setup-node/action.yml)

1. Sets up node@14
   - You can change the version by passing `node-version`.

##### Example

```yaml
- name:
  uses: myparcelnl/actions/setup-node@v3
  with:
    node-version: 18
```

### PHP

#### composer-install

[Source](composer-install/action.yml)

1. Sets up php@7.2 with composer v2
   - You can change the php version by passing `php-version`.
   - You can change the composer version or install any other tools by
     passing `tools`.
     See [shivammathur/setup-php](https://github.com/shivammathur/setup-php#wrench-tools-support)
     for supported values.
2. Handles cache
3. Runs `composer install --no-interaction --no-progress`
   - You can add additional flags by passing the `flags` option.

##### Example

```yaml
- uses: myparcelnl/actions/composer-install@v3
  with:
    php-version: '8.0'
    tools: php-cs-fixer, phpunit
    flags: --no-dev --no-plugins
```

### Testing

#### update-coverage

[Source](update-coverage/action.yml)

1. Runs [codecov/codecov-action]
   - Needs a [Codecov] token in `token`.

##### Example

```yaml
- uses: myparcelnl/actions/update-coverage@v3
  with:
    token: ${{ secrets.CODECOV_TOKEN }}
```

### Docker

#### build-docker-image

[Source](build-docker-image/action.yml)

Builds a docker image from a Dockerfile. Layers are cached and pruned between
jobs based on git ref and tag.

##### Inputs

| Required | Name          | Description                                  | Example                                   | Default                  |
| -------- | ------------- | -------------------------------------------- | ----------------------------------------- | ------------------------ |
| Yes      | `image`       | Image name                                   | `my-name/my-image`                        | –                        |
| Yes      | `key`         | Cache key                                    | `my-image-${{ hashFiles('Dockerfile') }}` | `${{ github.workflow }}` |
| No       | `dockerfile`  | Path to dockerfile                           | `./docker/prod.Dockerfile`                | `Dockerfile`             |
| No       | `context`     | Directory to build from                      | `./docker`                                | `.`                      |
| No       | `docker-args` | Arguments to pass to docker build            | `--target prod`                           |                          |
| No       | `prune-after` | Amount of time until which images get pruned | `24h`                                     | `260h` (2 weeks)         |
| No       | `buildkit`    | Whether to use Docker BuildKit               | `true`                                    | `false`                  |

##### Outputs

| Name           | Description                 | Example                       |
| -------------- | --------------------------- | ----------------------------- |
| `tagged-image` | Created image name with tag | `my-name/my-image:1639002200` |
| `tag`          | Tag of the created image    | `1639002200`                  |

##### Example

```yaml
- uses: myparcelnl/actions/build-docker-image@v3
  id: docker
  with:
    image: myparcel/php-sdk
    dockerfile: Dockerfile
    context: .
    docker-args: --target test
    buildkit: true

- run: docker run ${{ steps.docker.outputs.tagged-image }}
```

#### build-docker-image-reg

[Source](build-docker-image-reg/action.yml)

Builds a docker image from a Dockerfile. Layers are cached and pruned between
jobs using a registry.

##### Inputs

| Required | Name                | Description                        | Example                               | Default      |
| -------- | ------------------- | ---------------------------------- | ------------------------------------- | ------------ |
| Yes      | `image`             | Image name                         | `my-name/my-image`                    | –            |
| No       | `dockerfile`        | Path to dockerfile                 | `./docker/prod.Dockerfile`            | `Dockerfile` |
| No       | `context`           | Directory to build from            | `./docker`                            | `.`          |
| No       | `target`            | Target stage to build              | `--target prod`                       | –            |
| No       | `registry`          | Packages registry to use           | `docker.io`                           | `ghcr.io`    |
| Yes      | `registry-username` | Username to log into registry with | `${{ secrets.DOCKER_REGISTRY_USER }}` | –            |
| Yes      | `registry-password` | Password to log into registry with | `${{ secrets.DOCKER_REGISTRY_PASS }}` | –            |

##### Outputs

| Name           | Description                 | Example                       |
| -------------- | --------------------------- | ----------------------------- |
| `tagged-image` | Created image name with tag | `my-name/my-image:1639002200` |
| `tag`          | Tag of the created image    | `1639002200`                  |

##### Example

```yaml
- uses: myparcelnl/actions/build-docker-image@v3
  id: docker
  with:
    image: myparcel/php-sdk
    registry-username: ${{ github.actor }}
    registry-password: ${{ secrets.GITHUB_TOKEN }}

- run: docker run ${{ steps.docker.outputs.tagged-image }}
```

#### pull-docker-image

[Source](pull-docker-image/action.yml)

Pulls and caches a docker image. Outputs the image name that was input to provide an easy way to not have to repeat the image name in the rest of your workflow.

##### Inputs

| Required | Name              | Description                 | Example            | Default           |
| -------- | ----------------- | --------------------------- | ------------------ | ----------------- |
| Yes      | `image`           | Image name                  | `my-name/my-image` | –                 |
| No       | `cache-directory` | Directory to store cache in | `/path/to/cache`   | `~/.docker-cache` |

##### Outputs

| Name    | Description | Example            |
| ------- | ----------- | ------------------ |
| `image` | Image name  | `my-name/my-image` |

##### Example

```yaml
- uses: myparcelnl/actions/pull-docker-image@v3
  id: pull
  with:
    image: ghcr.io/myparcelnl/php-xd:7.4

- run: docker run ${{ steps.pull.outputs.image }}
```

### Releasing

#### semantic-release

[Source](semantic-release/action.yml)

Run [semantic-release]. Requires npm dependencies to be installed. Outputs information on the release that was just made (or not).

##### Inputs

| Required | Name                    | Description                                 | Example                       | Default |
| -------- | ----------------------- | ------------------------------------------- | ----------------------------- | ------- |
| Yes      | `token`                 | GitHub Personal access token                | `${{ secrets.GITHUB_TOKEN }}` | –       |
| No       | `semantic-release-args` | Semantic release arguments                  | `--dry-run`                   | –       |
| No       | `write-summary`         | Write a summary to the GitHub action output | `true`                        | `false` |

##### Outputs

| Name                      | Description                                                             | Example  |
| ------------------------- | ----------------------------------------------------------------------- | -------- |
| `version`                 | The version that was just released, prefixed with "v"                   | `v1.2.3` |
| `previous-version`        | The version before the release, prefixed with "v"                       | `v1.2.2` |
| `version-number`          | The version number that was just released                               | `1.2.3`  |
| `previous-version-number` | The version number before the release                                   | `1.2.2`  |
| `release-type`            | The type of the new release. Can be "major", "minor", "patch" or "none" | `patch`  |
| `released`                | Whether a new version was released                                      | `true`   |

##### Example

```yaml
- uses: myparcelnl/actions/yarn-install@v3

- uses: myparcelnl/actions/semantic-release@v3
  id: release
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    write-summary: true
    semantic-release-args: --branches=my-branch
  env:
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}

- run: echo ${{ steps.release.outputs.version }}
```

### Git

#### setup-git-credentials

[Source](setup-git-credentials/action.yml)

Set up git credentials and authenticate as a [GitHub app].

##### Example

```yaml
- uses: myparcelnl/actions/setup-git-credentials@v3
  with:
    app-id: ${{ secrets.GITHUB_APP_ID }}
    private-key: ${{ secrets.GITHUB_APP_PRIVATE_KEY }}
```

##### Inputs

| Required | Name          | Description                 | Example                          | Default |
| -------- | ------------- | --------------------------- | -------------------------------- | ------- |
| true     | `app-id`      | The app ID of the app.      | `${{ secrets.APP_ID }}`          | –       |
| true     | `private-key` | The private key of the app. | `${{ secrets.APP_PRIVATE_KEY }}` | –       |

##### Outputs

| Name        | Description                  | Example                                |
| ----------- | ---------------------------- | -------------------------------------- |
| `name`      | The name of the app.         | `my-app`                               |
| `token`     | The GitHub token of the app. | `ghp_1234567890`                       |
| `git-name`  | The name to use with git.    | `my-app[bot]`                          |
| `git-email` | The email to use with git.   | `my-app[bot]@users.noreply.github.com` |

#### rebase

[Source](rebase/action.yml)

Rebase two branches and push.

##### Inputs

| Required | Name     | Description                          | Example                        | Default  |
| -------- | -------- | ------------------------------------ | ------------------------------ | -------- |
| Yes      | `target` | Target branch you wish to update.    | `develop`                      | –        |
| Yes      | `base`   | Base branch to use to rebase target. | `main`                         | –        |
| Yes      | `token`  | GitHub token to use.                 | `${{ secrets.GH_REPO_TOKEN }}` | –        |
| No       | `force`  | Force push.                          | `true`                         | `false`  |
| No       | `remote` | The remote to use                    | `upstream`                     | `origin` |

##### Example

```yaml
- uses: myparcelnl/actions/rebase@v3
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    base: main
    target: develop
    force: true
    remote: upstream
```

#### update-tags

[Source](update-tags/action.yml)

Update git tags to keep major and minor version in sync. Good for releasing
GitHub actions.

##### Inputs

| Required | Name    | Description               | Example | Default |
| -------- | ------- | ------------------------- | ------- | ------- |
| No       | `minor` | Update the major version. | `true`  | `true`  |
| No       | `major` | Update the minor version. | `true`  | `false` |

##### Example

```yaml
- uses: myparcelnl/actions/update-tags@v3
  with:
    minor: true
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

This takes the tag on the current commit, for example `v2.3.1` after
running [semantic-release], and parses it to determine which tags should be
updated.

If run with `minor: true`:

- Will add `v2` to the current commit
- Will add `v2.3` to the current commit

If run without `minor: true`, or with `minor: false`:

- Will add `v2` to the current commit.

#### compare-branches

[Source](compare-branches/action.yml)

Check if there are new commits in head that are not in base.

##### Inputs

| Required | Name     | Description                         | Example           | Default   |
| -------- | -------- | ----------------------------------- | ----------------- | --------- |
| No       | `base`   | The base branch to compare against  | `main`            | `main`    |
| No       | `head`   | The branch to check for new commits | `feat/my-feature` | `develop` |
| No       | `remote` | The remote to use                   | `upstream`        | `origin`  |

##### Outputs

| Name          | Description                                  | Example                                                           |
| ------------- | -------------------------------------------- | ----------------------------------------------------------------- |
| `diff`        | Whether the branches are different           | `true`                                                            |
| `commits`     | List of commits in head that are not in base | `• fix: fix a bug (3 days ago)`                                   |
| `compare-url` | Link to the compare view of both commits     | `https://github.com/myparcelnl/woocommerce/compare/main..develop` |

### GitHub

#### get-github-token

[Source](get-github-token/action.yml)

Gets a GitHub token to use in the workflow. If `token` is passed, it will be used. Otherwise, an app token will be generated. Either `token` or `app-id` and `private-key` must be passed.

Meant for use within other actions, because obviously you could just use the `token` input directly.

##### Example

```yaml
- uses: myparcelnl/actions/get-github-token@v3
  id: passed-token
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}

- uses: myparcelnl/actions/get-github-token@v3
  id: generated-token
  with:
    app-id: ${{ secrets.GITHUB_APP_ID }}
    private-key: ${{ secrets.GITHUB_APP_PRIVATE_KEY }}

- run: echo ${{ steps.passed-token.outputs.token }} # The GitHub token that was passed in.

- run: echo ${{ steps.generated-token.outputs.token }} # The GitHub token that was generated.
```

##### Inputs

| Required | Name          | Description                                                                                      | Example                          | Default |
| -------- | ------------- | ------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| false    | `token`       | GitHub token to use. If passed, takes precedence over the `app-id` and `app-private-key` inputs. | `${{ secrets.GITHUB_TOKEN }}`    | –       |
| false    | `app-id`      | The app ID of the app.                                                                           | `${{ secrets.APP_ID }}`          | –       |
| false    | `private-key` | The private key of the app.                                                                      | `${{ secrets.APP_PRIVATE_KEY }}` | –       |

##### Outputs

| Name    | Description       | Example |
| ------- | ----------------- | ------- |
| `token` | The GitHub token. | `***`   |

#### pr-assign-author

[Source](pr-assign-author/action.yml)

Assign the author of a pull request to the pull request. For use with the `pull_request` event.

##### Example

```yaml
- uses: myparcelnl/actions/pr-assign-author@v3
  with:
    token: ${{ secrets.GITHUB_TOKEN }}

# Or, if you want to use a GitHub app:

- uses: myparcelnl/actions/pr-assign-author@v3
  with:
    app-id: ${{ secrets.GITHUB_APP_ID }}
    private-key: ${{ secrets.GITHUB_APP_PRIVATE_KEY }}
```

##### Inputs

| Required | Name          | Description                                                                                      | Example                          | Default |
| -------- | ------------- | ------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| false    | `token`       | GitHub token to use. If passed, takes precedence over the `app-id` and `app-private-key` inputs. | `${{ secrets.GITHUB_TOKEN }}`    | –       |
| false    | `app-id`      | The app ID of the app.                                                                           | `${{ secrets.APP_ID }}`          | –       |
| false    | `private-key` | The private key of the app.                                                                      | `${{ secrets.APP_PRIVATE_KEY }}` | –       |

#### pr-label-by-review

[Source](pr-label-by-review/action.yml)

Label a pull request based on the review state. For use with the `pull_request_review` event.

1. Gets the amount of reviews needed.
   - Uses `inputs.reviews-required` if passed.
   - If this input does not exist, the action will get the data via branch protections. You'll need an app or access token with the `read settings` permission for this.
2. Calculates whether the PR is approved or changes are requested.
3. Labels the PR accordingly, removing labels that are no longer relevant.
   - If the PR is approved: `inputs.label-approved` is added, `inputs.label-changes-requested` is removed if it exists.
   - If changes are requested: `inputs.label-changes-requested` is added, `inputs.label-approved` is removed if it exists.
   - If the PR is not approved and no changes are requested: `inputs.label-approved` and `inputs.label-changes-requested` are removed if they exist.

##### Example

```yaml
- uses: myparcelnl/actions/pr-label-by-review@v3
  with:
    # Either a GitHub token or a GitHub app is required.
    token: ${{ secrets.GITHUB_TOKEN }}

    # Omit `token` and pass the following if you want to use a GitHub app:
    app-id: ${{ secrets.GITHUB_APP_ID }}
    private-key: ${{ secrets.GITHUB_APP_PRIVATE_KEY }}

    label-approved: 'yay' # The label to add when the PR is approved.
    label-changes-requested: 'nay' # The label to add when changes are requested.
    required-approvals: 2 # The number of reviews required to merge the PR. Should be passed only if you don't have an access token or app with the read settings permission.
```

##### Inputs

| Required | Name                      | Description                                                                                                                               | Example                          | Default             |
| -------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| false    | `token`                   | GitHub token to use. If passed, takes precedence over the `app-id` and `app-private-key` inputs.                                          | `${{ secrets.GITHUB_TOKEN }}`    | –                   |
| false    | `app-id`                  | The app ID of the app.                                                                                                                    | `${{ secrets.APP_ID }}`          | –                   |
| false    | `private-key`             | The private key of the app.                                                                                                               | `${{ secrets.APP_PRIVATE_KEY }}` | –                   |
| false    | `required-approvals`      | The number of reviews required to merge the PR. Can be passed if you don't have an access token or app with the read settings permission. | `2`                              | –                   |
| false    | `label-approved`          | The label to add when the PR is approved.                                                                                                 | `ready to merge`                 | `approved`          |
| false    | `label-changes-requested` | The label to add when changes are requested.                                                                                              | `needs work`                     | `changes requested` |

#### pr-validate-title-conventional

[Source](pr-validate-title-conventional/action.yml)

Validate the title of a pull request based on the conventional commit format. For use with the `pull_request` event.

##### Example

```yaml
- uses: myparcelnl/actions/pr-validate-title-conventional@v3
  with:
    token: ${{ secrets.GITHUB_TOKEN }}

# Or, if you want to use a GitHub app:

- uses: myparcelnl/actions/pr-validate-title-conventional@v3
  with:
    app-id: ${{ secrets.GITHUB_APP_ID }}
    private-key: ${{ secrets.GITHUB_APP_PRIVATE_KEY }}
```

##### Inputs

| Required | Name          | Description                                                                                      | Example                          | Default |
| -------- | ------------- | ------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| false    | `token`       | GitHub token to use. If passed, takes precedence over the `app-id` and `app-private-key` inputs. | `${{ secrets.GITHUB_TOKEN }}`    | –       |
| false    | `app-id`      | The app ID of the app.                                                                           | `${{ secrets.APP_ID }}`          | –       |
| false    | `private-key` | The private key of the app.                                                                      | `${{ secrets.APP_PRIVATE_KEY }}` | –       |

##### Outputs

| Name      | Description                              | Example                         |
| --------- | ---------------------------------------- | ------------------------------- |
| `success` | Whether the PR title is valid.           | `true`                          |
| `error`   | Error in case the PR title is not valid. | `(string containing the error)` |

### Miscellaneous

#### bundlewatch

[Source](bundlewatch/action.yml)

Run [BundleWatch] to check the size of your bundles. You will need to provide a [BundleWatch token] and a configuration. If you don't pass the `config` input, it will look for the `bundlewatch` key in your `package.json`.

##### Example

```yaml
- uses: myparcelnl/actions/bundlewatch@v3
  with:
    config: .bundlewatch.json
    token: ${{ secrets.BUNDLEWATCH_TOKEN }}
```

##### Inputs

| Required | Name   | Description                          | Example                            | Default |
| -------- | ------ | ------------------------------------ | ---------------------------------- | ------- |
| No       | config | Path to the BundleWatch config file. | `.bundlewatch.json`                | –       |
| Yes      | token  | BundleWatch token to use.            | `${{ secrets.BUNDLEWATCH_TOKEN }}` | –       |

#### cache-nx

[Source](cache-nx/action.yml)

Save and restore the [Nx](https://nx.dev/) cache.

1. Runs [actions/cache] and caches `./node_modules/.cache/nx`

##### Example

```yaml
- uses: myparcelnl/actions/cache-nx@v3
```

[BundleWatch]: https://bundlewatch.io/
[Codecov]: https://codecov.io
[Github app]: https://docs.github.com/en/developers/apps
[actions/checkout]: https://github.com/actions/checkout
[actions/setup-node]: https://github.com/actions/setup-node
[build-docker-image-reg]: #build-docker-image-reg
[build-docker-image]: #build-docker-image
[codecov/codecov-action]: https://github.com/codecov/codecov-action
[composer-install]: #composer-install
[npm-install]: #npm-install
[pnpm-install]: #pnpm-install
[semantic-release]: #semantic-release
[setup-git-credentials]: #setup-git-credentials
[yarn-install]: #yarn-install
