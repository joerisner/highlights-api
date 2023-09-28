// NOTE: All this is to get around ESLint not being able to parse type assertions
//  for JSON imports w/ ESM. Replace this later w/ a single-line import.
import { readFile } from 'node:fs/promises';
const jsonUrl = new URL('../data/tags.json', import.meta.url);
const json = JSON.parse(await readFile(jsonUrl, 'utf8'));

export const getAllTags = () => new Promise((resolve, _reject) => resolve(json));
