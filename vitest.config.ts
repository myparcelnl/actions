import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./private/test/test-setup.ts'],
    coverage: {
      all: true,
      reporter: ['text', 'clover'],
    },
  },
});
