import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import {
  findQuotationById,
  findQuotationsByAuthorId,
  findQuotationsBySourceId,
  findQuotationsByTagId,
  numQuotations
} from '#models/quotation';

describe('findQuotationById()', () => {
  test('resolves promise when quotation is found', () => {
    assert.doesNotReject(findQuotationById(1));
  });

  test('rejects promise when quotation is not found', () => {
    assert.rejects(findQuotationById(0), { message: 'Could not find a quotation with id 0' });
  });

  test('returns quotation object when found', async () => {
    assert.deepStrictEqual(await findQuotationById(5), {
      id: 5,
      body: 'Nothing important is easy.',
      metadata: 'Page 13',
      authorId: 2,
      sourceId: 2,
      tagIds: [1]
    });
  });
});

describe('findQuotationsByAuthorId()', () => {
  test('resolves promise when quotations are found', () => {
    assert.doesNotReject(findQuotationsByAuthorId(1));
  });

  test('rejects promise when quotations are not found', () => {
    assert.rejects(findQuotationsByAuthorId(0), { message: 'Could not find any quotations for Author ID 0' });
  });

  test('returns quotations array', async () => {
    const results = await findQuotationsByAuthorId(1);
    assert.equal(Array.isArray(results), true);
    results.forEach(result => assert.equal(typeof result, 'object'));
  });
});

describe('findQuotationsBySourceId()', () => {
  test('resolves promise when quotations are found', () => {
    assert.doesNotReject(findQuotationsBySourceId(1));
  });

  test('rejects promise when quotations are not found', () => {
    assert.rejects(findQuotationsBySourceId(0), { message: 'Could not find any quotations for Source ID 0' });
  });

  test('returns quotations array', async () => {
    const results = await findQuotationsBySourceId(1);
    assert.equal(Array.isArray(results), true);
    results.forEach(result => assert.equal(typeof result, 'object'));
  });
});

describe('findQuotationsByTagId()', () => {
  test('resolves promise when quotations are found', () => {
    assert.doesNotReject(findQuotationsByTagId(1));
  });

  test('rejects promise when quotations are not found', () => {
    assert.rejects(findQuotationsByTagId(0), { message: 'Could not find any quotations for Tag ID 0' });
  });

  test('returns quotations array', async () => {
    const results = await findQuotationsByTagId(1);
    assert.equal(Array.isArray(results), true);
    results.forEach(result => assert.equal(typeof result, 'object'));
  });
});

describe('numQuotations()', () => {
  test('returns number', () => {
    assert.equal(typeof numQuotations(), 'number');
  });
});
