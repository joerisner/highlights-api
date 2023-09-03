import { findAuthorById } from '#models/author';
import { findQuotationById, numQuotations } from '#models/quotation';
import { findSourceById } from '#models/source';

export const getRandomHighlight = async () => {
  const randomId = Math.floor(Math.random() * numQuotations() + 1);
  const quotation = await findQuotationById(randomId);
  const author = await findAuthorById(quotation.authorId);
  const source = await findSourceById(quotation.sourceId);

  return { author, quotation, source };
};
