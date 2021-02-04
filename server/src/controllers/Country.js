const CountryService = require('../services/api/Country');

exports.getAllCountries = async (req, res) => {
  try {
    const countries = await CountryService.getAllCountries();
    res.send(countries);
  } catch ({ error }) {
    res.status(error.status);
    res.send(error.message);
  }
};

exports.getCountry = async (req, res) => {
  try {
    const country = await CountryService.getCountry(req.params.name);
    res.send(country);
  } catch ({ error }) {
    res.status(error.status);
    res.send(error.message);
  }
};

exports.getCountries = async (req, res) => {
  const { countryNames } = req.body;

  try {
    const countries = await CountryService.getCountries(countryNames);

    res.json({ countries });
  } catch ({ error }) {
    res.status(error.status);
    res.send(error.message);
  }
};
