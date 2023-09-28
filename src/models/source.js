// NOTE: All this is to get around ESLint not being able to parse type assertions
//  for JSON imports w/ ESM. Replace this later w/ a single-line import.
import { readFile } from 'node:fs/promises';
const jsonUrl = new URL('../data/sources.json', import.meta.url);
const json = JSON.parse(await readFile(jsonUrl, 'utf8'));

export const findSourceById = sourceId =>
  new Promise((resolve, reject) => {
    const source = json.sources.find(source => source.id === sourceId);

    if (source) resolve(source);
    reject(new Error(`Could not find a source with id ${sourceId}`));
  });

export const getAllSources = () => new Promise((resolve, _reject) => resolve(json));
