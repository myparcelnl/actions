export const DESCRIPTION_MARKER = '<!-- myparcelnl/actions/pr-dependabot-description -->';

export const COMMENT_MARKER = '<!-- myparcelnl/actions/pr-dependabot-description-notes -->';

// GitHub rejects comments longer than this many characters.
const COMMENT_LIMIT = 65_536;

// Dependabot wraps its "Dependabot is rebasing this PR" banner in this marker, also on a recreate.
const REBASING_MARKER = '[//]: # (dependabot-start)';

const COMMENT_PREFIX = '<details><summary>Release notes from Dependabot</summary>\n\n';

/**
 * Check if the description already is the short description this action writes.
 */
export const isRewritten = (description: string): boolean => description.includes(DESCRIPTION_MARKER);

/**
 * Check if Dependabot is busy rebasing or recreating the pull request.
 */
export const isRebasing = (description: string): boolean => description.includes(REBASING_MARKER);

/**
 * Build the short description from a Dependabot commit message: the body without the subject line, plus the marker.
 */
export const buildDescription = (commitMessage: string): string => {
  const body = commitMessage.split('\n').slice(1).join('\n').trim();

  return `${body}\n\n${DESCRIPTION_MARKER}`;
};

/**
 * Build the comment that keeps the original Dependabot description, cut to fit the GitHub comment limit.
 */
export const buildNotesComment = (originalDescription: string, pullRequestUrl: string): string => {
  const suffix = `\n\n</details>\n${COMMENT_MARKER}`;
  const cutNotice = `\n\n_Release notes cut. The description of [the pull request](${pullRequestUrl}) links to the full release notes of each package._`;
  const fits = COMMENT_PREFIX.length + originalDescription.length + suffix.length <= COMMENT_LIMIT;
  const notes = fits
    ? originalDescription
    : `${originalDescription.slice(
        0,
        COMMENT_LIMIT - COMMENT_PREFIX.length - cutNotice.length - suffix.length,
      )}${cutNotice}`;

  return `${COMMENT_PREFIX}${notes}${suffix}`;
};
