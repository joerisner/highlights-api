import { getAllTags } from '#models/tag';

export const getTags = async (_req, res, next) => {
  try {
    const tags = await getAllTags();
    res.status(200).setHeader('Access-Control-Allow-Origin', '*').json(tags);
  } catch (err) {
    next(err);
  }
};
