import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { loadJson } from '#utils/jsonLoader';

const { sources } = await loadJson('sources');

describe('Sources JSON', () => {
  test('validates no duplicate IDs', () => {
    const allIds = sources.map(source => source.id);
    const uniqIds = new Set(allIds);

    assert.equal(allIds.length, uniqIds.size);
  });
});
