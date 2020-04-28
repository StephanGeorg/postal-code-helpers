import { expect } from 'chai';

import postalCodeHelpers from '../src/index';

describe('Succesful returning country codes  ...', () => {
  it('Successfully validate postal code by country', (done) => {
    const code = postalCodeHelpers.validate('10999', 'DE');
    expect(code).to.be.equal(true);
    done();
  });
  it('Failed validate postal code by country', (done) => {
    const code = postalCodeHelpers.validate('asdfghjklö', 'de');
    expect(code).to.be.equal(false);
    done();
  });

  it('Search countries by postal code', (done) => {
    const countries = postalCodeHelpers.search('SE1 6DR');
    expect(countries).to.have.lengthOf(1);
    expect(countries).to.include('GB');
    done();
  });
});
