import {
  getAllCountries as getAllCountriesService,
  getCountry as getCountryService,
  getCountries as getCountriesService,
} from '../services/api/Country';

export const getAllCountries = async (req, res) => {
  try {
    const countries = await getAllCountriesService();
    res.send(countries);
  } catch ({ error }) {
    res.status(error.status);
    res.send(error.message);
  }
};

export const getCountry = async (req, res) => {
  try {
    const country = await getCountryService(req.params.name);
    res.send(country);
  } catch ({ error }) {
    res.status(error.status);
    res.send(error.message);
  }
};

export const getCountries = async (req, res) => {
  const { countryNames } = req.body;

  try {
    const countries = await getCountriesService(countryNames);

    res.json({ countries });
  } catch ({ error }) {
    res.status(error.status);
    res.send(error.message);
  }
};
