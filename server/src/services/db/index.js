const get = require('lodash.get');

const cache = {};

const getItemByKey = (key) => cache[key];

const searchItem = (key, value) =>
  Object.values(cache).find((item) => get(item, key) === value);

const setItem = (key, value) => (cache[key] = value);

module.exports = {
  getItemByKey,
  searchItem,
  setItem,
};
