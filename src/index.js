import postalCodeTypes from './data/postalCodeTypes.min.json';
import postalCodesObject from './data/postalCodesObject.min.json';

const postalCodeHelpers = {
  /**
   * Extract postal codes by country from string
   * @param {*} input
   * @param {*} country
   * @returns {string[]|null}
   */
  extract(input = '', country = '') {
    const postalCode = postalCodesObject[country.toUpperCase().trim()];
    if (!postalCode || !postalCode.regex) return null;
    const postCodeRegex = new RegExp(postalCode.regex.replace(/^\^(.*)\$$/, '\\b$1\\b'), 'ig');
    return input.match(postCodeRegex);
  },

  /**
   * Validate postal code by country
   * @param {string} code
   * @param {string} country
   * @returns {string|null}
   */
  validate(code = '', country = '') {
    if (!code || !country) return undefined;
    const postalCode = postalCodesObject[country.toUpperCase().trim()];
    if (!postalCode || !postalCode.regex) return null;
    return new RegExp(postalCode.regex, 'i').test(code);
  },

  /**
   * Locate countries for postal code
   * @param {string} code
   * @returns {string[]|null}
   */
  locate(code = '') {
    const result = [];
    const regexTypes = Object.keys(postalCodeTypes);
    for (let index = 0; index < regexTypes.length; index++) {
      const postalRegex = regexTypes[index];
      if (new RegExp(postalRegex, 'i').test(code)) {
        return postalCodeTypes[postalRegex].countries;
      }
    }
    return result.length
      ? result
      : null;
  },
};

export default postalCodeHelpers;
module.exports = postalCodeHelpers;
