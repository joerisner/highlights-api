import { findTagById } from '#models/tag';

export const listTagNamesFromIds = idsArray =>
  Promise.all(
    idsArray.map(async id => {
      const tag = await findTagById(id);
      return tag.name;
    })
  );
