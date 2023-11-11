import { findAllAuthors } from '#models/author';

export const getAuthors = async (_req, res, next) => {
  try {
    const authors = await findAllAuthors();
    res.status(200).setHeader('Access-Control-Allow-Origin', '*').json(authors);
  } catch (err) {
    next(err);
  }
};
