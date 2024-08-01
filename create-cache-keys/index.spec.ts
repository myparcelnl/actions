import {beforeEach, describe, expect, it, vi} from 'vitest';
import {getOutput, setInputs} from '../private/test';

type Inputs = {
  input?: string;
  key: string;
  'restore-keys'?: string;
};

interface TestInput {
  expectedKey: string;
  expectedRestoreKeys: string[];
  inputs: Inputs;
  name: string;
}

describe('create-cache-keys', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it.each([
    {
      name: 'only key',
      inputs: {
        key: 'my-cache-identifier',
      },
      expectedKey: 'my-cache-identifier',
      expectedRestoreKeys: [],
    },
    {
      name: 'with input',
      inputs: {
        key: 'my-key',
        input: [`20.04`, `8d8gy7ehg9e9a87ghr98`].join('\n'),
      },
      expectedKey: 'my-key-20.04-8d8gy7ehg9e9a87ghr98',
      expectedRestoreKeys: ['my-key-20.04-', 'my-key-'],
    },
    {
      name: 'with manual restore keys amount',
      inputs: {
        key: 'Linux-cache',
        input: ['a', 'b', 'c'].join('\n'),
        'restore-keys': '2',
      },
      expectedKey: 'Linux-cache-a-b-c',
      expectedRestoreKeys: ['Linux-cache-a-b-', 'Linux-cache-a-'],
    },
  ] satisfies TestInput[])('creates cache keys with $name', async ({inputs, expectedKey, expectedRestoreKeys}) => {
    expect.assertions(2);

    setInputs<Inputs>({
      'restore-keys': 'auto',
      ...inputs,
    });

    await import('./index');

    expect(getOutput('key')).toBe(expectedKey);
    expect(getOutput('restore-keys')?.split('\n').filter(Boolean)).toEqual(expectedRestoreKeys);
  });
});
