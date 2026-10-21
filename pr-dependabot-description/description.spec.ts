import {
  COMMENT_MARKER,
  DESCRIPTION_MARKER,
  buildDescription,
  buildNotesComment,
  isRebasing,
  isRewritten,
} from './description';
import {describe, expect, it} from 'vitest';

const COMMENT_LIMIT = 65_536;

describe('pr-dependabot-description', () => {
  describe('isRewritten', () => {
    it('is true when the description contains the marker', () => {
      expect.assertions(1);

      expect(isRewritten(`Bumps vite.\n\n${DESCRIPTION_MARKER}`)).toBe(true);
    });

    it.each(['', 'Bumps [vite](https://github.com/vitejs/vite) from 5.4.21 to 6.4.3.'])(
      'is false without the marker: %j',
      (description) => {
        expect.assertions(1);

        expect(isRewritten(description)).toBe(false);
      },
    );
  });

  describe('isRebasing', () => {
    it('is true while Dependabot shows its rebasing banner', () => {
      expect.assertions(1);

      const banner = [
        '[//]: # (dependabot-start)',
        '⚠️  **Dependabot is rebasing this PR** ⚠️ ',
        '',
        "Rebasing might not happen immediately, so don't worry if this takes some time.",
        '',
        '---',
        '',
        '[//]: # (dependabot-end)',
        '',
        'Bumps [vite](https://github.com/vitejs/vite) from 5.4.21 to 6.4.3.',
      ].join('\n');

      expect(isRebasing(banner)).toBe(true);
    });

    it('is false for a normal Dependabot description', () => {
      expect.assertions(1);

      expect(isRebasing('Bumps [vite](https://github.com/vitejs/vite) from 5.4.21 to 6.4.3.')).toBe(false);
    });
  });

  describe('buildDescription', () => {
    it('removes the subject line and adds the marker', () => {
      expect.assertions(3);

      const body =
        'Bumps [vite](https://github.com/vitejs/vite) from 5.4.21 to 6.4.3.\n---\nupdated-dependencies:\n- dependency-name: vite';
      const result = buildDescription(`build(deps): bump vite from 5.4.21 to 6.4.3\n\n${body}`);

      expect(result).toBe(`${body}\n\n${DESCRIPTION_MARKER}`);
      expect(result).not.toContain('build(deps)');
      expect(isRewritten(result)).toBe(true);
    });
  });

  describe('buildNotesComment', () => {
    const url = 'https://github.com/myparcelnl/example/pull/1';

    it('wraps the original description in a details block', () => {
      expect.assertions(3);

      const result = buildNotesComment('Release notes here', url);

      expect(result.startsWith('<details><summary>Release notes from Dependabot</summary>')).toBe(true);
      expect(result).toContain('Release notes here');
      expect(result.endsWith(COMMENT_MARKER)).toBe(true);
    });

    it('stays within the GitHub comment limit and links the pull request when cut', () => {
      expect.assertions(4);

      const result = buildNotesComment('a'.repeat(200_000), url);

      expect(result.length).toBeLessThanOrEqual(COMMENT_LIMIT);
      expect(result.endsWith(COMMENT_MARKER)).toBe(true);
      expect(result).toContain(url);
      expect(result).toContain('</details>');
    });
  });
});
