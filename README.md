# GitHub Actions

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/myparcelnl/actions)

This is a collection of reusable composite actions for GitHub Actions workflows.

## Overview

- [General usage](#general-usage)
- [Actions](#actions)
    - [Node](#node)
        - [npm-install](#npm-install)
        - [setup-node](#setup-node)
        - [yarn-install](#yarn-install)
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
- [Workflows](#workflows)
    - [Semantic Release](#semantic-release-workflow)

## General usage

### Versioning

We use semantic versioning. We will only push breaking changes to major updates.
Minor versions are features, additions and improvements, and patch versions are
bug fixes. **We recommend using a major version.**

| Version | Constraint              |
|---------|:------------------------|
| v2      | `>= v2.0.0 && > v3.0.0` |
| v2.0    | `>= v2.0.0 && > v2.1.0` |
| v2.0.0  | `v2.0.0`                |

You can also use `main` to always use the latest actions, but this is not
recommended as this will also include breaking changes.

#### Major example

```yaml
- uses: myparcelnl/actions/yarn-install@v2
```

Will use every minor and patch update within `v2.x.x`.

#### Minor example

```yaml
- uses: myparcelnl/actions/yarn-install@v2
```

Will use every patch update within `v2.1.x`.

## Actions

### Node

#### npm-install

[Source](npm-install/action.yml)

1. Runs [actions/setup-node]
2. Handles `node_modules` cache
3. Runs `npm ci`

##### Example

```yaml
- uses: myparcelnl/actions/npm-install@v2
  with:
    node-version: 16
```

#### yarn-install

[Source](yarn-install/action.yml)

1. Runs [actions/setup-node]
2. Handles `node_modules` cache
3. Runs `yarn install --frozen-lockfile`

##### Example

```yaml
- uses: myparcelnl/actions/yarn-install@v2
  with:
    node-version: 16
```

#### pnpm-install

[Source](pnpm-install/action.yml)

1. Runs [actions/setup-node]
2. Installs pnpm
4. Handles pnpm cache
5. Runs `pnpm install --frozen-lockfile`

##### Example

```yaml
- uses: myparcelnl/actions/pnpm-install@v2
  with:
    node-version: 16
```

#### ~~setup-node~~

> ⚠️ Deprecated: use actions/setup-node@v3 instead.

[Source](setup-node/action.yml)

1. Sets up node@14
    - You can change the version by passing `node-version`.

##### Example

```yaml
- name:
  uses: myparcelnl/actions/setup-node@v2
  with:
    node-version: 16
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
- uses: myparcelnl/actions/composer-install@v2
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
- uses: myparcelnl/actions/update-coverage@v2
  with:
    token: ${{ secrets.CODECOV_TOKEN }}
```

### Docker

#### build-docker-image

[Source](build-docker-image/action.yml)

Builds a docker image from a Dockerfile. Layers are cached and pruned between
jobs based on git ref and tag.

##### Inputs

| required | name          | description                                  | Example                                   | Default                  |
|----------|---------------|----------------------------------------------|-------------------------------------------|--------------------------|
| Yes      | `image`       | Image name                                   | `my-name/my-image`                        | –                        |
| Yes      | `key`         | Cache key                                    | `my-image-${{ hashFiles('Dockerfile') }}` | `${{ github.workflow }}` |
| No       | `dockerfile`  | Path to dockerfile                           | `./docker/prod.Dockerfile`                | `Dockerfile`             |
| No       | `context`     | Directory to build from                      | `./docker`                                | `.`                      |
| No       | `docker-args` | Arguments to pass to docker build            | `--target prod`                           |                          |
| No       | `prune-after` | Amount of time until which images get pruned | `24h`                                     | `260h` (2 weeks)         |
| No       | `buildkit`    | Whether to use Docker BuildKit               | `true`                                    | `false`                  |

##### Outputs

| name           | description                 | Example                       |
|----------------|-----------------------------|-------------------------------|
| `tagged-image` | Created image name with tag | `my-name/my-image:1639002200` |
| `tag`          | Tag of the created image    | `1639002200`                  |

##### Example

```yaml
- uses: myparcelnl/actions/build-docker-image@v2
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

| required | name                | description                        | Example                               | Default      |
|----------|---------------------|------------------------------------|---------------------------------------|--------------|
| Yes      | `image`             | Image name                         | `my-name/my-image`                    | –            |
| No       | `dockerfile`        | Path to dockerfile                 | `./docker/prod.Dockerfile`            | `Dockerfile` |
| No       | `context`           | Directory to build from            | `./docker`                            | `.`          |
| No       | `target`            | Target stage to build              | `--target prod`                       | –            |
| No       | `registry`          | Packages registry to use           | `docker.io`                           | `ghcr.io`    |
| Yes      | `registry-username` | Username to log into registry with | `${{ secrets.DOCKER_REGISTRY_USER }}` | –            |
| Yes      | `registry-password` | Password to log into registry with | `${{ secrets.DOCKER_REGISTRY_PASS }}` | –            |

##### Outputs

| name           | description                 | Example                       |
|----------------|-----------------------------|-------------------------------|
| `tagged-image` | Created image name with tag | `my-name/my-image:1639002200` |
| `tag`          | Tag of the created image    | `1639002200`                  |

##### Example

```yaml
- uses: myparcelnl/actions/build-docker-image@v2
  id: docker
  with:
    image: myparcel/php-sdk
    registry-username: ${{ github.actor }}
    registry-password: ${{ secrets.GITHUB_TOKEN }}

- run: docker run ${{ steps.docker.outputs.tagged-image }}
```

### Releasing

#### semantic-release

[Source](semantic-release/action.yml)

Run semantic release using the MyParcel bot. Requires npm dependencies to be
installed.

##### Example

```yaml
- uses: myparcelnl/actions/yarn-install@v2
- uses: myparcelnl/actions/semantic-release@v2
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Git

#### setup-git-credentials

[Source](setup-git-credentials/action.yml)

Set up git credentials and authenticate as MyParcelBot.

1. Runs [oleksiyrudenko/gha-git-credentials@v2.1]
    - Needs a [GitHub] token in `token`.

##### Example

```yaml
- uses: myparcelnl/actions/setup-git-credentials@v2
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
```

#### rebase

[Source](rebase/action.yml)

Rebase two branches and push.

- Needs a [GitHub] token in `token`.

##### Example

```yaml
- uses: myparcelnl/actions/rebase@v2
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    base: main
    target: develop
```

#### update-tags

[Source](update-tags/action.yml)

Update git tags to keep major and minor version in sync. Good for releasing
GitHub actions.

##### Inputs

| required | name    | description               | Example | Default |
|----------|---------|---------------------------|---------|---------|
| No       | `minor` | Update the major version. | `true`  | `true`  |
| No       | `major` | Update the minor version. | `true`  | `false` |

##### Example

```yaml
- uses: myparcelnl/actions/update-tags@v2
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

## Workflows

### Semantic Release workflow

[Source](.github/workflows/--semantic-release.yml)

- Runs [actions/checkout]@v3
- Runs [yarn-install]
- Runs [semantic-release]

#### Example

```yaml
# These should be defined in your repository if they are needed.
env:
  GH_REPO_TOKEN: ... # Falls back to GITHUB_TOKEN
  NPM_TOKEN: ...

jobs:
  release:
    uses: myparcelnl/actions/.github/workflows/--semantic-release.yml@v2
    secrets: inherit
```

[Codecov]: https://codecov.io
[actions/checkout]: https://github.com/actions/checkout
[actions/setup-node]: https://github.com/actions/setup-node
[build-docker-image-reg]: #build-docker-image-reg
[build-docker-image]: #build-docker-image
[codecov/codecov-action]: https://github.com/codecov/codecov-action
[composer-install]: #composer-install
[npm-install]: #npm-install
[pnpm-install]: #pnpm-install
[semantic-release]: #semantic-release
[yarn-install]: #yarn-install
