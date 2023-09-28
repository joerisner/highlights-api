import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { getAllTags } from '#models/tag';

describe('getAllTags()', () => {
  test('resolves promise', () => {
    assert.doesNotReject(getAllTags());
  });

  test('returns array of tags', async () => {
    const result = await getAllTags();
    const { tags } = result;

    assert.equal(typeof result, 'object');
    assert.equal(Array.isArray(tags), true);
  });
});
