import postalCodesCollection from './data/postalCodes.json';
import postalCodesObject from './data/postalCodesObject.json';

export default {
  /**
   * Validate postal code by country
   */
  validate(code = '', country = '') {
    if (!code || !country) return undefined;
    const postalCode = postalCodesObject[country.toUpperCase().trim()];
    if (!postalCode || !postalCode.regex) return null;
    return new RegExp(postalCode.regex, 'g').test(code);
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
    postalCodesCollection.forEach((postalCode = {}) => {
      if (postalCode && postalCode.postalCodeRegex) {
        if (new RegExp(postalCode.postalCodeRegex, 'g').test(code)) {
          result.push(postalCode.iso);
        }
      }
    });
    return result;
  },
};
