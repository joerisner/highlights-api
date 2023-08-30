import data from '../data/authors.json' assert { type: 'json' };

export const findAuthorById = authorId =>
  new Promise(resolve => resolve(data.authors.find(author => author.id === authorId)));
