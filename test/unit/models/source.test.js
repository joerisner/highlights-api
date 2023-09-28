import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { findSourceById, getAllSources } from '#models/source';

describe('findSourceById()', () => {
  test('resolves promise when source is found', () => {
    assert.doesNotReject(findSourceById(1));
  });

  test('rejects promise when source is not found', () => {
    assert.rejects(findSourceById(1000), { message: 'Could not find a source with id 1000' });
  });

  test('returns source object when found', async () => {
    assert.deepStrictEqual(await findSourceById(1), { id: 1, title: 'The Hobbit', type: 'BOOK' });
  });
});

describe('getAllSources()', () => {
  test('resolves promise', () => {
    assert.doesNotReject(getAllSources());
  });

  test('returns array of sources', async () => {
    const result = await getAllSources();
    const { sources } = result;

    assert.equal(typeof result, 'object');
    assert.equal(Array.isArray(sources), true);
  });
});
