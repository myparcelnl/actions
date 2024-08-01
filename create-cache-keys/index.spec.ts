import {beforeEach, describe, expect, it, vi} from 'vitest';
import {getOutput, setEnv} from '../private/test';

type EnvironmentVariables = {
  INPUT?: string;
  KEY: string;
  KEY_SEPARATOR?: string;
  RESTORE_KEYS?: string;
};

interface TestInput {
  env: EnvironmentVariables;
  expectedKey: string;
  expectedRestoreKeys: string[];
  name: string;
}

describe('create-cache-keys', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it.each([
    {
      name: 'only key',
      env: {
        KEY: 'my-cache-identifier',
      },
      expectedKey: 'my-cache-identifier',
      expectedRestoreKeys: [],
    },
    {
      name: 'with input',
      env: {
        KEY: 'my-key',
        INPUT: [`20.04`, `8d8gy7ehg9e9a87ghr98`].join('\n'),
      },
      expectedKey: 'my-key-20.04-8d8gy7ehg9e9a87ghr98',
      expectedRestoreKeys: ['my-key-20.04-', 'my-key-'],
    },
    {
      name: 'with manual restore keys amount',
      env: {
        KEY: 'Linux-cache',
        INPUT: ['a', 'b', 'c'].join('\n'),
        RESTORE_KEYS: '2',
      },
      expectedKey: 'Linux-cache-a-b-c',
      expectedRestoreKeys: ['Linux-cache-a-b-', 'Linux-cache-a-'],
    },
  ] satisfies TestInput[])('creates cache keys with $name', async ({env, expectedKey, expectedRestoreKeys}) => {
    expect.assertions(2);

    setEnv({
      INPUT: '',
      KEY_SEPARATOR: '-',
      RESTORE_KEYS: 'auto',
      ...env,
    } satisfies EnvironmentVariables);

    await import('./index');

    expect(getOutput('key')).toBe(expectedKey);
    expect(getOutput('restore-keys')?.split('\n').filter(Boolean)).toEqual(expectedRestoreKeys);
  });
});
