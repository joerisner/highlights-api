import { findAuthorById } from '#models/author';
import { findQuotationById, findAllQuotations } from '#models/quotation';
import { findSourceById } from '#models/source';
import { listTagNamesFromIds } from '#utils/models/tag';

export const getRandomHighlight = async (_req, res, next) => {
  try {
    const allQuotations = await findAllQuotations();
    const randomId = Math.floor(Math.random() * allQuotations.length + 1);
    const { body, authorId, sourceId, tagIds } = await findQuotationById(randomId);
    const { firstName, lastName } = await findAuthorById(authorId);
    const { title } = await findSourceById(sourceId);
    const tags = await listTagNamesFromIds(tagIds);

    const highlight = {
      author: `${firstName} ${lastName}`,
      body,
      source: title,
      tags
    };

    res.status(200).setHeader('Access-Control-Allow-Origin', '*').json(highlight);
  } catch (err) {
    next(err);
  }
};
