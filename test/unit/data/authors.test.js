import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { loadJson } from '#utils/jsonLoader';

const { authors } = await loadJson('authors');

describe('Authors JSON', () => {
  test('validates no duplicate IDs', () => {
    const allIds = authors.map(author => author.id);
    const uniqIds = new Set(allIds);

    assert.equal(allIds.length, uniqIds.size);
  });
});
