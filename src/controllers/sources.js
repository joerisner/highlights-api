import { getAllSources } from '#models/source';

export const getSources = async (_req, res, next) => {
  try {
    const sources = await getAllSources();
    res.status(200).setHeader('Access-Control-Allow-Origin', '*').json(sources);
  } catch (err) {
    next(err);
  }
};
