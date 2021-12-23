# GitHub Actions

This is a collection of reusable composite actions for GitHub Actions workflows.

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

## Node

### npm-install

[Source](npm-install/action.yml)

1. Runs [setup-node]
2. Handles cache
3. Runs `npm ci`

#### Example

```yaml
- uses: myparcelnl/actions/npm-install@v1
  with:
    node-version: 16
```

### setup-node

[Source](setup-node/action.yml)

1. Sets up node@14
    - You can change the version by passing `node-version`.

#### Example

```yaml
- name:
  uses: myparcelnl/actions/setup-node@v1
  with:
    node-version: 16
```

### yarn-install

[Source](yarn-install/action.yml)

1. Runs [setup-node]
2. Handles cache
3. Runs `yarn install --frozen-lockfile`

#### Example

```yaml
- uses: myparcelnl/actions/yarn-install@v1
  with:
    node-version: 16
```

## PHP

### composer-install

[Source](composer-install/action.yml)

1. Sets up php@7.2 with composer v2
    - You can change the php version by passing `php-version`.
    - You can change the composer version or install any other tools by passing `tools`.
        - See [shivammathur/setup-php](https://github.com/shivammathur/setup-php#wrench-tools-support) for supported
          values.
2. Handles cache
3. Runs `composer install --no-interaction --no-progress`
    - You can add additional flags by passing the `flags` option.

#### Example

```yaml
- uses: myparcelnl/actions/composer-install@v1
  with:
    php-version: '8.0'
    tools: php-cs-fixer, phpunit
    flags: --no-dev --no-plugins
```

## Testing

### update-coverage

[Source](update-coverage/action.yml)

1. Runs [codecov/codecov-action]
    - Needs a [Codecov] token in `token`.

#### Example

```yaml
- uses: myparcelnl/actions/update-coverage@v1
  with:
    token: ${{ secrets.CODECOV_TOKEN }}
```

## Docker

### build-docker-image

[Source](build-docker-image/action.yml)

Builds a docker image from a Dockerfile. Layers are cached and pruned between jobs based on git ref and tag.

#### Inputs

| required | name          | description                                  | Example                                   | Default                  |
|----------|---------------|----------------------------------------------|-------------------------------------------|--------------------------|
| Yes      | `image`       | Image name                                   | `my-name/my-image`                        | –                        |
| Yes      | `key`         | Cache key                                    | `my-image-${{ hashFiles('Dockerfile') }}` | `${{ github.workflow }}` |
| No       | `dockerfile`  | Path to dockerfile                           | `./docker/prod.Dockerfile`                | `Dockerfile`             |
| No       | `context`     | Directory to build from                      | `./docker`                                | `.`                      |
| No       | `docker_args` | Arguments to pass to docker build            | `--target prod`                           |                          |
| No       | `prune_after` | Amount of time until which images get pruned | `24h`                                     | `260h` (2 weeks)         |

#### Outputs

| name           | description                 | Example                       |
|----------------|-----------------------------|-------------------------------|
| `tagged_image` | Created image name with tag | `my-name/my-image:1639002200` |
| `tag`          | Tag of the created image    | `1639002200`                  |

#### Example

```yaml
- uses: myparcelnl/actions/build-docker-image@v1
  id: docker
  with:
    image: myparcel/php-sdk
    dockerfile: Dockerfile
    context: .
    docker_args: --target test

- run: docker run ${{ steps.docker.outputs.tagged_image }}
```

[Codecov]: https://codecov.io
[build-docker-image]: #build-docker-image
[codecov/codecov-action]: https://github.com/codecov/codecov-action
[composer-install]: #composer-install
[npm-install]: #npm-install
[setup-node]: #setup-node
[yarn-install]: #yarn-install
