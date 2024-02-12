import { loadJson } from '#utils/jsonLoader';

const json = await loadJson('sources');

export const findSourceById = sourceId =>
  new Promise((resolve, reject) => {
    const source = json.sources.find(source => source.id === sourceId);

    if (source) resolve(source);
    reject(new Error(`Could not find a source with id ${sourceId}`));
  });

export const findAllSources = () => new Promise((resolve, _reject) => resolve(json));
