import { findAuthorById } from '#models/author';
import { findQuotationById, findQuotations } from '#models/quotation';
import { findSourceById } from '#models/source';
import { listTagNamesFromIds } from '#utils/models/tag';
import { handle404 } from '../errorHandler.js';

const generateHighlight = async quotation => {
  const { body, authorId, sourceId, tagIds } = quotation;
  const { firstName, lastName } = await findAuthorById(authorId);
  const { title } = await findSourceById(sourceId);
  const tags = await listTagNamesFromIds(tagIds);

  return {
    author: `${firstName} ${lastName}`,
    body,
    source: title,
    tags
  };
};

export const getRandomHighlight = async (_req, res, next) => {
  try {
    const allQuotations = await findQuotations();
    const randomId = Math.floor(Math.random() * allQuotations.length + 1);
    const quotation = await findQuotationById(randomId);
    const highlight = await generateHighlight(quotation);

    res.status(200).setHeader('Access-Control-Allow-Origin', '*').json(highlight);
  } catch (err) {
    next(err);
  }
};

export const getHighlights = async (req, res, next) => {
  try {
    const { author, source, tag } = req.query;

    if (!author && !source && !tag) {
      throw { status: 400, message: 'Must request highlights by author, source, or tag!' };
    }

    const queryFilter = {};
    if (author) {
      queryFilter.authorId = parseInt(author);
    }

    if (source) {
      queryFilter.sourceId = parseInt(source);
    }

    if (tag) {
      queryFilter.tagId = parseInt(tag);
    }

    const quotations = await findQuotations(queryFilter);
    const highlights = await Promise.all(quotations.map(quotation => generateHighlight(quotation)));

    res.status(200).setHeader('Access-Control-Allow-Origin', '*').json(highlights);
  } catch (err) {
    if (err.message === 'No quotations found') {
      handle404(req, res, next);
    } else {
      next(err);
    }
  }
};
