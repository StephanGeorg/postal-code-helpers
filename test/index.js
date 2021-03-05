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

  it('Search countries by postal code SE1 6DR', (done) => {
    const countries = postalCodeHelpers.search('SE1 6DR');
    expect(countries).to.have.lengthOf(1);
    expect(countries).to.include('GB');
    done();
  });

  it('Search countries by postal code 12055', (done) => {
    const countries = postalCodeHelpers.search('12055');
    expect(countries).to.have.lengthOf(47);
    expect(countries).to.include('DE');
    expect(countries).to.include('IT');
    done();
  });
});
