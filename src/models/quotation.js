import { loadJson } from '#utils/jsonLoader';

const { quotations } = await loadJson('quotations');

export const findQuotationById = quotationId =>
  new Promise((resolve, reject) => {
    const result = quotations.find(quotation => quotation.id == quotationId);

    if (result) resolve(result);
    reject(new Error(`Could not find a quotation with id ${quotationId}`));
  });

export const findQuotations = (opts = null) => {
  if (opts === null) return Promise.resolve(quotations);
  if (typeof opts !== 'object') return Promise.reject(new Error('Pass an object to findQuotations'));

  return new Promise((resolve, reject) => {
    const { authorId, sourceId, tagId } = opts;
    const results = quotations.filter(
      quotation =>
        quotation.authorId === authorId || quotation.sourceId === sourceId || quotation.tagIds.includes(tagId)
    );

    if (results.length) resolve(results);
    reject(new Error('No quotations found'));
  });
};
