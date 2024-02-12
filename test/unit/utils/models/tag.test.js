import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { listTagNamesFromIds } from '#utils/models/tag';

describe('listTagNamesFromIds()', () => {
  test('create array of tag names from ids array', async () => {
    assert.deepStrictEqual(await listTagNamesFromIds([1, 2, 3]), ['Inspiration', 'Parenthood', 'Fatherhood']);
  });
});
