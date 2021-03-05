import postalCodeTypes from './data/postalCodeTypes.json';
import postalCodesObject from './data/postalCodesObject.json';

export default {
  /**
   * Validate postal code by country
   */
  validate(code = '', country = '') {
    if (!code || !country) return undefined;
    const postalCode = postalCodesObject[country.toUpperCase().trim()];
    if (!postalCode || !postalCode.regex) return null;
    return new RegExp(postalCode.regex, 'i').test(code);
  },

  /**
   *  Extract postal code by country from string
   */
  // extract(code = '', country = '') {
  //
  // },

  /**
   *  Search countries by postal code
   */
  search(code = '') {
    const result = [];
    const regexTypes = Object.keys(postalCodeTypes);
    for (let index = 0; index < regexTypes.length; index++) {
      const postalRegex = regexTypes[index];
      if (new RegExp(postalRegex, 'i').test(code)) {
        return postalCodeTypes[postalRegex].countries;
      }
    }
  },
};
