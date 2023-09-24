import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { findQuotationById } from '#models/quotation';

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
