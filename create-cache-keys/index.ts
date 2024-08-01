/* eslint-disable no-continue */
import * as core from '@actions/core';

const cleanArray = (array: string[]): string[] => array.map((string) => string.trim()).filter(Boolean);

const toArray = (input: string): string[] => cleanArray(input.split('\n'));

const calculateRestoreKeysAmount = (inputLength: number): number => {
  return process.env.RESTORE_KEYS === 'auto' ? inputLength : Number(process.env.RESTORE_KEYS);
};

const createCacheKeys = (): void => {
  const keySeparator: string = process.env.KEY_SEPARATOR ?? '-';
  const input: string[] = toArray(process.env.INPUT ?? '');

  const restoreKeysAmount: number = calculateRestoreKeysAmount(input.length);

  const keyParts: string[] = cleanArray([process.env.KEY ?? '', ...toArray(process.env.INPUT ?? '')]);

  const baseKey = keyParts.join(keySeparator);

  const restoreKeys = keyParts.reduce((acc, _, index) => {
    if (acc.length < restoreKeysAmount) {
      const restoreKey = keyParts.slice(0, -index - 1);

      acc.push(`${restoreKey.join(keySeparator)}${keySeparator}`);
    }

    return acc;
  }, [] as string[]);
  core.setOutput('key', baseKey);
  core.setOutput('restore-keys', cleanArray(restoreKeys).join('\n'));
};

try {
  void createCacheKeys();
} catch (e) {
  if (e instanceof Error) {
    core.setFailed(e.message);
  }
}
