import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { findTagById, findAllTags } from '#models/tag';

describe('findTagById()', () => {
  test('resolves promise when tag is found', () => {
    assert.doesNotReject(findTagById(1));
  });

  test('rejects promise when tag is not found', () => {
    assert.rejects(findTagById(1000), { message: 'Could not find a tag with id 1000' });
  });

  test('returns tag object when found', async () => {
    assert.deepStrictEqual(await findTagById(1), { id: 1, name: 'Inspiration' });
  });
});

describe('findAllTags()', () => {
  test('resolves promise', () => {
    assert.doesNotReject(findAllTags());
  });

  test('returns array of tags', async () => {
    const result = await findAllTags();
    const { tags } = result;

    assert.equal(typeof result, 'object');
    assert.equal(Array.isArray(tags), true);
  });
});
