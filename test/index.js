import { expect } from 'chai';

import postalCodeHelpers from '../src/index';

describe('Extract postal code from string  ...', () => {
  it('Extract single code', (done) => {
    const postalCodes = postalCodeHelpers.extract('this is a post code 00-791 inside a string', 'PL');
    expect(postalCodes).to.have.lengthOf(1);
    expect(postalCodes[0]).to.be.equal('00-791');
    done();
  });

  it('Extract multiple codes', (done) => {
    const postalCodes = postalCodeHelpers.extract('this is a post code 10999 inside a 10247 string', 'DE');
    expect(postalCodes).to.have.lengthOf(2);
    expect(postalCodes[0]).to.be.equal('10999');
    expect(postalCodes[1]).to.be.equal('10247');
    done();
  });

  it('Extract multiple codes', (done) => {
    const postalCodes = postalCodeHelpers.extract('this .10247, is a r23412345341 postal code 10999', 'DE');
    expect(postalCodes).to.have.lengthOf(2);
    expect(postalCodes[0]).to.be.equal('10247');
    expect(postalCodes[1]).to.be.equal('10999');
    done();
  });

  it('Do not extract from numbers', (done) => {
    const postalCodes = postalCodeHelpers.extract('this is a post code 1099921342345 inside a 1024 string', 'DE');
    expect(postalCodes).to.be.equal(null);
    done();
  });

  it('Failed extraction', (done) => {
    const postalCodes = postalCodeHelpers.extract('this is a post code 1099921342345 inside a 1024 string', 'XYZ');
    expect(postalCodes).to.be.equal(null);
    done();
  });
});

describe('Validating postal codes  ...', () => {
  it('Successfully validate postal code by country', (done) => {
    const code = postalCodeHelpers.validate('10999', 'DE');
    expect(code).to.be.equal(true);
    done();
  });

  it('Successfully validate postal code by country', (done) => {
    const code = postalCodeHelpers.validate('100 44', 'SE');
    expect(code).to.be.equal(true);
    done();
  });

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
});

describe('Locate countries for postal code  ...', () => {
  it('Get countries by postal code SE1 6DR', (done) => {
    const countries = postalCodeHelpers.locate('SE1 6DR');
    expect(countries).to.have.lengthOf(1);
    expect(countries).to.include('GB');
    done();
  });

  it('Postal code 12055', (done) => {
    const countries = postalCodeHelpers.locate('12055');
    expect(countries).to.have.lengthOf(47);
    expect(countries).to.include('DE');
    expect(countries).to.include('IT');
    done();
  });

  it('Failed getting a country', (done) => {
    const countries = postalCodeHelpers.locate('this is not a postal code');
    expect(countries).to.be.equal(null);
    done();
  });
});
