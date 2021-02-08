const get = require('lodash.get');

const cache = {};

export const getItemByKey = (key) => cache[key];

export const searchItem = (key, value) =>
  Object.values(cache).find((item) => get(item, key) === value);

export const setItem = (key, value) => (cache[key] = value);
