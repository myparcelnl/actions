# GitHub Actions

This is a collection of reusable composite actions for GitHub Actions workflows.

## npm-install

1. Sets up node@14
    - You can change the version by passing `node-version`.
2. Handles cache
3. Runs `npm ci`

### Example

```yaml
- name:
  uses: myparcelnl/actions/npm-install
  with:
    node-version: 16
```
