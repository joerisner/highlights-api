// NOTE: All this is to get around ESLint not being able to parse type assertions
//  for JSON imports w/ ESM. Replace this later w/ a single-line import.
import { readFile } from 'node:fs/promises';
const jsonUrl = new URL('../data/authors.json', import.meta.url);
const json = JSON.parse(await readFile(jsonUrl, 'utf8'));

export const findAuthorById = authorId =>
  new Promise((resolve, reject) => {
    const author = json.authors.find(author => author.id === authorId);

    if (author) resolve(author);
    reject(new Error(`Could not find an author with id ${authorId}`));
  });

export const getAllAuthors = () => new Promise((resolve, _reject) => resolve(json));
