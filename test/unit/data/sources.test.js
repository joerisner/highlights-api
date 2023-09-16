import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
// NOTE: All this is to get around ESLint not being able to parse type assertions
//  for JSON imports w/ ESM. Replace this later w/ a single-line import.
import { readFile } from 'node:fs/promises';
const jsonUrl = new URL('../../../src/data/sources.json', import.meta.url);
const { sources } = JSON.parse(await readFile(jsonUrl, 'utf8'));

describe('Sources JSON', () => {
  test('validates no duplicate IDs', () => {
    const allIds = sources.map(source => source.id);
    const uniqIds = new Set(allIds);

    assert.equal(allIds.length, uniqIds.size);
  });
});
