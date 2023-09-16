import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
// NOTE: All this is to get around ESLint not being able to parse type assertions
//  for JSON imports w/ ESM. Replace this later w/ a single-line import.
import { readFile } from 'node:fs/promises';
const jsonUrl = new URL('../../../src/data/authors.json', import.meta.url);
const { authors } = JSON.parse(await readFile(jsonUrl, 'utf8'));

describe('Authors JSON', () => {
  test('validates no duplicate IDs', () => {
    const allIds = authors.map(author => author.id);
    const uniqIds = new Set(allIds);

    assert.equal(allIds.length, uniqIds.size);
  });
});
