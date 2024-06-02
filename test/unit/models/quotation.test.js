import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { findQuotationById, findQuotations } from '#models/quotation';

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

describe('findQuotations()', () => {
  test('returns quotations array', async () => {
    const results = await findQuotations();
    assert.equal(Array.isArray(results), true);
    results.forEach(result => assert.equal(typeof result, 'object'));
  });

  test('returns all quotatons when opts is null', async () => {
    const results = await findQuotations();
    assert.equal(results.length, results.at(-1).id);
  });

  test('rejects promise when opts is not an object', () => {
    ['str', true, 1, () => {}].forEach(i => {
      assert.rejects(findQuotations(i), { message: 'Pass an object to findQuotations' });
    });
  });

  test('returns quotations by authorId', async () => {
    const authorId = 2;
    const results = await findQuotations({ authorId });

    results.forEach(quotation => assert.equal(quotation.authorId, authorId));
  });

  test('returns quotations by sourceId', async () => {
    const sourceId = 2;
    const results = await findQuotations({ sourceId });

    results.forEach(quotation => assert.equal(quotation.sourceId, sourceId));
  });

  test('returns quotations by tagId', async () => {
    const tagId = 1;
    const results = await findQuotations({ tagId });

    results.forEach(quotation => assert(quotation.tagIds.includes(tagId)));
  });

  test('rejects promise when quotation is not found', () => {
    assert.rejects(findQuotations({ authorId: 1000 }), { message: 'No quotations found' });
  });
});
