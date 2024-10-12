const urlValidationPattern = /^(https?:\/\/.*\.(?:jpg|png))$/i;

const validateImageURL = (url) => {
  if (url === null) {
    return true;
  }
  return urlValidationPattern.test(url);
};

module.exports = { validateImageURL };