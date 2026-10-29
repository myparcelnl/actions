import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    reporters: ['default', ['junit', {outputFile: './junit.xml'}]],
    setupFiles: ['./private/test/test-setup.ts'],
    coverage: {
      reporter: ['text', 'clover'],
      include: ['**/*.ts'],
      exclude: ['**/dist/**', '**/node_modules/**', 'private/**', '*.*'],
    },
  },
});
