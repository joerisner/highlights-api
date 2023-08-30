import data from '../data/sources.json' assert { type: 'json' };

export const findSourceById = sourceId =>
  new Promise(resolve => resolve(data.sources.find(source => source.id === sourceId)));
