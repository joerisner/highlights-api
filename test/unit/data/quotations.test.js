import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { loadJson } from '#utils/jsonLoader';

const { quotations } = await loadJson('quotations');

describe('Quotations JSON', () => {
  test('validates no duplicate IDs', () => {
    const allIds = quotations.map(quotation => quotation.id);
    const uniqIds = new Set(allIds);

    assert.equal(allIds.length, uniqIds.size);
  });
});
