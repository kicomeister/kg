import request from '../request';
import { API_URL } from '../../../config';

export const registration = async (data) => {
  try {
    const response = await request({
      endpoint: `${API_URL}/registration`,
      config: {
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
        method: 'PUT',
      },
    });

    return response;
  } catch (e) {
    console.error(e);
    alert('Registration failed!');
    return '';
  }
};

export const login = async (data) => {
  try {
    const response = await request({
      endpoint: `${API_URL}/login`,
      config: {
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
        method: 'POST',
      },
    });

    return response;
  } catch (e) {
    alert('Authentication failed!');
    console.error(e);
    return {};
  }
};
