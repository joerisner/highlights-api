import { loadJson } from '#utils/jsonLoader';

const json = await loadJson('tags');

export const findTagById = tagId =>
  new Promise((resolve, reject) => {
    const tag = json.tags.find(tag => tag.id === tagId);

    if (tag) resolve(tag);
    reject(new Error(`Could not find a tag with id ${tagId}`));
  });

export const findAllTags = () => new Promise((resolve, _reject) => resolve(json));
