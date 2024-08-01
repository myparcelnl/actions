// mock core.setOutput so the created outputs can be read from a variable

import {beforeEach, vi} from 'vitest';
import {storage} from './outputs';

vi.mock('@actions/core', async () => {
  return {
    ...(await vi.importActual('@actions/core')),
    setOutput: vi.fn((name, value) => {
      storage.outputs.set(name, value);
    }),
  };
});

beforeEach(() => {
  storage.outputs = new Map<string, string>();
});
