import { findAuthorById } from '#models/author';
import { findQuotationById, numQuotations } from '#models/quotation';
import { findSourceById } from '#models/source';

export const getRandomHighlight = async res => {
  try {
    const randomId = Math.floor(Math.random() * numQuotations() + 1);
    const quotation = await findQuotationById(randomId);
    const author = await findAuthorById(quotation.authorId);
    const source = await findSourceById(quotation.sourceId);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ author, quotation, source }));
  } catch (err) {
    console.error(err);
  }
};

/**
 * TODO:
 * 1. Highlight by author
 * 2. Highlight by source
 * 3. Highlight by search on quotation body
 */
