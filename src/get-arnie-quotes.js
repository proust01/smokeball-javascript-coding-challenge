const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.

  // Helper function to fetch the quote from a given URL
  const fetchQuote = async (url) => {
    const {status, body} = await httpGet(url)
    // Parse the response body once
    const parsedBody = JSON.parse(body);

    // Return the quote or failure message based on the status
    return status === 200 ? {'Arnie Quote': parsedBody.message} : {'FAILURE': parsedBody.message}
  }

  // Process all URLs concurrently and return the results
  return await Promise.all(urls.map(fetchQuote));
};

module.exports = {
  getArnieQuotes,
};
