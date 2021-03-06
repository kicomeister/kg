import request from '../request';

const serviceUrl = 'https://restcountries.eu/rest/v2/';

const getUrl = (path) => `${serviceUrl}${path}?fields=name;capital;currencies`;

export const getAllCountries = async () => {
  const countries = await request({ endpoint: getUrl('all') });

  return countries;
};

export const getCountry = async (countryName) => {
  const country = await request({ endpoint: getUrl(`name/${countryName}/`) });

  return country;
};

export const getCountries = async (countryNames = []) => {
  const countries = await Promise.all(
    countryNames.map((country) => getCountry(country))
  );

  return countries.reduce((acc, country) => [...acc, ...country], []);
};
