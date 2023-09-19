import { findAuthorById } from '#models/author';
import { findQuotationById, numQuotations } from '#models/quotation';
import { findSourceById } from '#models/source';

const buildResponseBody = async () => {
  const randomId = Math.floor(Math.random() * numQuotations() + 1);
  const quotation = await findQuotationById(randomId);
  const author = await findAuthorById(quotation.authorId);
  const source = await findSourceById(quotation.sourceId);

  return { author, quotation, source };
};

export const getRandomHighlight = async (_req, res, next) => {
  try {
    const highlight = await buildResponseBody();
    res.status(200).setHeader('Access-Control-Allow-Origin', '*').json(highlight);
  } catch (err) {
    next(err);
  }
};
