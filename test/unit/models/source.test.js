import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { findSourceById } from '#models/source';

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
