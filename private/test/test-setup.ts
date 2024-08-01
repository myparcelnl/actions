// mock core.setOutput so the created outputs can be read from a variable

import {beforeEach, vi} from 'vitest';
import {storage} from './storage';

vi.mock('@actions/core', async () => {
  return {
    ...(await vi.importActual('@actions/core')),
    setOutput: vi.fn((name, value) => {
      storage.outputs.set(name, value);
    }),
    getInput: vi.fn((name) => {
      return storage.inputs.get(name);
    }),
  };
});

beforeEach(() => {
  storage.inputs = new Map<string, string>();
  storage.outputs = new Map<string, string>();
});
