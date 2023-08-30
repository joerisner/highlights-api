// All this is to get around ESLint not being able to parse type assertions
//  for JSON imports w/ ESM. Replace this later w/ a single-line import.
import { readFile } from 'node:fs/promises';
const jsonUrl = new URL('../data/sources.json', import.meta.url);
const { sources } = JSON.parse(await readFile(jsonUrl, 'utf8'));

export const findSourceById = sourceId =>
  new Promise(resolve => resolve(sources.find(source => source.id === sourceId)));
