import { findAuthorById } from '../models/author.js';
import { findQuotationById, numQuotations } from '../models/quotation.js';
import { findSourceById } from '../models/source.js';

const generateRandomId = () => Math.floor(Math.random() * numQuotations() + 1);

export const getRandomHighlight = async (res) => {
  try {
    const quotation = await findQuotationById(generateRandomId());
    const author = await findAuthorById(quotation.authorId);
    const source = await findSourceById(quotation.sourceId);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ author, quotation, source }));
    res.end();
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
