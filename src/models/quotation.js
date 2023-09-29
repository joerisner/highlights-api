// NOTE: All this is to get around ESLint not being able to parse type assertions
//  for JSON imports w/ ESM. Replace this later w/ a single-line import.
import { readFile } from 'node:fs/promises';
const jsonUrl = new URL('../data/quotations.json', import.meta.url);
const { quotations } = JSON.parse(await readFile(jsonUrl, 'utf8'));

export const findQuotationById = quotationId =>
  new Promise((resolve, reject) => {
    const result = quotations.find(quotation => quotation.id === quotationId);

    if (result) resolve(result);
    reject(new Error(`Could not find a quotation with id ${quotationId}`));
  });

export const findQuotationsByAuthorId = authorId =>
  new Promise((resolve, reject) => {
    const results = quotations.filter(quotation => quotation.authorId === authorId);

    if (results.length) resolve(results);
    reject(new Error(`Could not find any quotations for Author ID ${authorId}`));
  });

export const findQuotationsBySourceId = sourceId =>
  new Promise((resolve, reject) => {
    const results = quotations.filter(quotation => quotation.sourceId === sourceId);

    if (results.length) resolve(results);
    reject(new Error(`Could not find any quotations for Source ID ${sourceId}`));
  });

export const findQuotationsByTagId = tagId =>
  new Promise((resolve, reject) => {
    const results = quotations.filter(quotation => quotation.tagIds.includes(tagId));

    if (results.length) resolve(results);
    reject(new Error(`Could not find any quotations for Tag ID ${tagId}`));
  });

export const numQuotations = () => quotations.length;
