// All this is to get around ESLint not being able to parse type assertions
//  for JSON imports w/ ESM. Replace this later w/ a single-line import.
import { readFile } from 'node:fs/promises';
const jsonUrl = new URL('../data/quotations.json', import.meta.url);
const { quotations } = JSON.parse(await readFile(jsonUrl, 'utf8'));

export const findQuotationById = quotationId =>
  new Promise(resolve => resolve(quotations.find(quotation => quotation.id === quotationId)));

export const numQuotations = () => quotations.length;
