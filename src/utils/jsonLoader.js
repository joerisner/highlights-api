/*
 * TODO: Remove this once ESLint supports JSON import assertions.
 * Eslint does not support import assertions because they only
 * support stage-4 language features.
 * See https://github.com/eslint/eslint/discussions/15305.
 */
import { readFile } from 'node:fs/promises';

export const loadJson = async collection => {
  const jsonUrl = new URL(`../data/${collection}.json`, import.meta.url);
  return JSON.parse(await readFile(jsonUrl, 'utf8'));
};
