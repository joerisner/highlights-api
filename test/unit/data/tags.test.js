import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { loadJson } from '#utils/jsonLoader';

const { tags } = await loadJson('tags');

describe('Tags JSON', () => {
  test('validates no duplicate IDs', () => {
    const allIds = tags.map(tag => tag.id);
    const uniqIds = new Set(allIds);

    assert.equal(allIds.length, uniqIds.size);
  });
});
