import { loadJson } from '#utils/jsonLoader';

const { quotations } = await loadJson('quotations');

export const findQuotationById = quotationId =>
  new Promise((resolve, reject) => {
    const result = quotations.find(quotation => quotation.id == quotationId);

    if (result) resolve(result);
    reject(new Error(`Could not find a quotation with id ${quotationId}`));
  });

export const findQuotationsByAuthorId = authorId =>
  new Promise((resolve, reject) => {
    const results = quotations.filter(quotation => quotation.authorId == authorId);

    if (results.length) resolve(results);
    reject(new Error(`Could not find any quotations for Author ID ${authorId}`));
  });

export const findQuotationsBySourceId = sourceId =>
  new Promise((resolve, reject) => {
    const results = quotations.filter(quotation => quotation.sourceId == sourceId);

    if (results.length) resolve(results);
    reject(new Error(`Could not find any quotations for Source ID ${sourceId}`));
  });

export const findQuotationsByTagId = tagId =>
  new Promise((resolve, reject) => {
    const results = quotations.filter(quotation => quotation.tagIds.includes(tagId));

    if (results.length) resolve(results);
    reject(new Error(`Could not find any quotations for Tag ID ${tagId}`));
  });

export const findAllQuotations = () => new Promise((resolve, _reject) => resolve(quotations));
