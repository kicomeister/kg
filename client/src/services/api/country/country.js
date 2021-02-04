import request from '../request';
import { API_URL } from '../../../config';

export const getAllCountries = async () => {
  try {
    const response = await request({ endpoint: `${API_URL}/all-countries` });

    return response;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getCountry = async (country) => {
  try {
    const response = await request({ endpoint: `${API_URL}/country/${country}` });

    return response;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getCountryies = async (countryNames) => {
  try {
    const response = await request({
      endpoint: `${API_URL}/countries`,
      config: {
        headers: {
          'Content-Type': 'application/json',
        },
        body: { countryNames },
        method: 'POST',
      },
    });

    return response.countries;
  } catch (e) {
    console.error(e);
    return [];
  }
};
