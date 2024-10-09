import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['default', ['junit', {outputFile: './junit.xml'}]],
    setupFiles: ['./private/test/test-setup.ts'],
    coverage: {
      all: true,
      reporter: ['text', 'clover'],
      include: ['**/*', '!**/dist/**', '!**/node_modules/**', '!**/private/**', '!*.*'],
    },
  },
});
