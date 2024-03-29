import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { findAuthorById, findAllAuthors } from '#models/author';

describe('findAuthorById()', () => {
  test('resolves promise when author is found', () => {
    assert.doesNotReject(findAuthorById(1));
  });

  test('rejects promise when author is not found', () => {
    assert.rejects(findAuthorById(1000), { message: 'Could not find an author with id 1000' });
  });

  test('returns author object when found', async () => {
    assert.deepStrictEqual(await findAuthorById(1), { id: 1, firstName: 'J.R.R.', lastName: 'Tolkien' });
  });
});

describe('findAllAuthors()', () => {
  test('resolves promise', () => {
    assert.doesNotReject(findAllAuthors());
  });

  test('returns array of authors', async () => {
    const result = await findAllAuthors();
    const { authors } = result;

    assert.equal(typeof result, 'object');
    assert.equal(Array.isArray(authors), true);
  });
});
