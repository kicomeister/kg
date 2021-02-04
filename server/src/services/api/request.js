const fetch = require('node-fetch');

const request = async ({ endpoint, config }) => {
  const result = await fetch(endpoint, config);

  const contentType = result.headers.get('content-type');

  const response =
    contentType && !contentType.includes('application/json')
      ? result.text()
      : result.json();

  if (!result.ok) {
    throw {
      error: await response,
    };
  } else {
    const json = await response;
    return json;
  }
};

module.exports = request;
