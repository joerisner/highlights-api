import data from '../data/quotations.json' assert { type: 'json' };

const { quotations } = data;

export const findQuotationById = quotationId =>
  new Promise(resolve => resolve(quotations.find(quotation => quotation.id === quotationId)));

export const numQuotations = () => quotations.length;
