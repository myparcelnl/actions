# GitHub Actions

This is a collection of reusable composite actions for GitHub Actions workflows.

## Node

### npm-install

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

1. Runs [codecov/codecov-action]
    - Needs a [Codecov] token in `token`.

#### Example

```yaml
- uses: myparcelnl/actions/update-coverage@v1
  with:
    token: ${{ secrets.CODECOV_TOKEN }}
```

[Codecov]: https://codecov.io
[codecov/codecov-action]: https://github.com/codecov/codecov-action
[composer-install]: #composer-install
[npm-install]: #npm-install
[setup-node]: #setup-node
[yarn-install]: #yarn-install
