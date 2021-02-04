const request = async ({ endpoint, config = {} }) => {
  const { body, useAuthentication, headers = {}, ...restConfig } = config;
  const token = localStorage.getItem('token');

  const result = await fetch(endpoint, {
    ...restConfig,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      ...headers,
      ...(useAuthentication && { Authorization: `Bearer ${token}` }),
    },
  });

  const contentType = result.headers.get('content-type');

  const response = contentType && !contentType.includes('application/json') ? result.text() : result.json();

  if (!result.ok) {
    throw {
      error: await response,
    };
  } else {
    const json = await response;
    return json;
  }
};

export default request;
