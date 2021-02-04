const request = require('../request');

const serviceUrl = 'https://restcountries.eu/rest/v2/';

const getUrl = (path) => `${serviceUrl}${path}?fields=name;capital;currencies`;

const getAllCountries = async () => {
  const countries = await request({ endpoint: getUrl('all') });

  return countries;
};

const getCountry = async (countryName) => {
  const country = await request({ endpoint: getUrl(`name/${countryName}/`) });

  return country;
};

const getCountries = async (countryNames = []) => {
  console.log(
    '🚀 ~ file: index.js ~ line 20 ~ getCountries ~ countryNames',
    countryNames
  );

  const countries = await Promise.all(
    countryNames.map((country) => getCountry(country))
  );
  console.log(
    '🚀 ~ file: index.js ~ line 23 ~ exports.getCountries= ~ countries',
    countries
  );

  return countries.reduce((acc, country) => [...acc, ...country], []);
};

exports.getAllCountries = getAllCountries;
exports.getCountry = getCountry;
exports.getCountries = getCountries;
