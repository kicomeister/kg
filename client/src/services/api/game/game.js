import request from '../request';
import { API_URL } from '../../../config';

export const getSlotMachineSpin = async () => {
  try {
    const response = await request({
      endpoint: `${API_URL}/slot-machine`,
      config: {
        useAuthentication: true,
      },
    });

    return response;
  } catch (e) {
    console.error(e);
    alert('Something went wront!');
    return {};
  }
};
