import { loadJson } from '#utils/jsonLoader';

const json = await loadJson('authors');

export const findAuthorById = authorId =>
  new Promise((resolve, reject) => {
    const author = json.authors.find(author => author.id === authorId);

    if (author) resolve(author);
    reject(new Error(`Could not find an author with id ${authorId}`));
  });

export const findAllAuthors = () => new Promise((resolve, _reject) => resolve(json));
