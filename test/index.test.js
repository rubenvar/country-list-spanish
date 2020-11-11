require('chai/register-expect');
const { getCountry, getCode, getCountries, getCodes } = require('../index');

describe('getCountry function', () => {
  it('returns a country name from a code', () => {
    expect(getCountry('PM')).to.equal('San Pedro y Miquelón');
  });
  it('returns a country name from a reserved code', () => {
    expect(getCountry('IC')).to.equal('Islas Canarias');
  });
  it('returns undefined if the code is not in list', () => {
    expect(getCountry()).to.be.undefined;
    expect(getCountry('NJ')).to.be.undefined;
  });
});

describe('getCode function', () => {
  it('returns a code from a country name', () => {
    expect(getCode('San Pedro y Miquelón')).to.equal('PM');
  });
  it('returns a reserved code from a country name', () => {
    expect(getCode('Islas Canarias')).to.equal('IC');
  });
  it('returns undefined if the country name is not in list', () => {
    expect(getCode('País de Nunca Jamás')).to.be.undefined;
  });
});

describe('getCountries function', () => {
  it('without config, returns an array of country names', () => {
    expect(getCountries()).to.be.an('array');
    expect(getCountries()).to.have.a.lengthOf(249);
    expect(getCountries()).to.include('San Pedro y Miquelón');
    expect(getCountries()).to.not.include('Islas Canarias');
    expect(getCountries()).to.not.include('El país de Nunca Jamás');
  });
  it('with extended = true, returns an array of all country names (including exceptional)', () => {
    const config = { extended: true };
    expect(getCountries(config)).to.be.an('array');
    expect(getCountries(config)).to.have.a.lengthOf(262);
    expect(getCountries(config)).to.include('San Pedro y Miquelón');
    expect(getCountries(config)).to.include('Islas Canarias');
    expect(getCountries()).to.not.include('El país de Nunca Jamás');
  });
  it('with object = true, returns an object of codes-country names', () => {
    const config = { object: true };
    expect(getCountries(config)).to.be.an('object');
    expect(Object.keys(getCountries(config))).to.have.a.lengthOf(249);
    expect(getCountries(config)).to.have.property('PM');
    expect(getCountries(config)).to.not.have.property('IC');
    expect(getCountries(config)).to.not.have.property('NJ');
    expect(getCountries(config)).to.have.property('PM', 'San Pedro y Miquelón');
  });
  it('with object = true & extended = true, returns an object of all codes-country names', () => {
    const config = { object: true, extended: true };
    expect(getCountries(config)).to.be.an('object');
    expect(Object.keys(getCountries(config))).to.have.a.lengthOf(262);
    expect(getCountries(config)).to.have.property('PM');
    expect(getCountries(config)).to.have.property('IC');
    expect(getCountries(config)).to.not.have.property('NJ');
    expect(getCountries(config)).to.have.property('PM', 'San Pedro y Miquelón');
    expect(getCountries(config)).to.have.property('IC', 'Islas Canarias');
  });
});

describe('getCodes function', () => {
  it('without config, returns an array of codes', () => {
    expect(getCodes()).to.be.an('array');
    expect(getCodes()).to.have.a.lengthOf(249);
    expect(getCodes()).to.include('PM');
    expect(getCodes()).to.not.include('IC');
    expect(getCodes()).to.not.include('NJ');
  });
  it('with extended = true, returns an array of all codes (including exceptional)', () => {
    const config = { extended: true };
    expect(getCodes(config)).to.be.an('array');
    expect(getCodes(config)).to.have.a.lengthOf(262);
    expect(getCodes(config)).to.include('PM');
    expect(getCodes(config)).to.include('IC');
    expect(getCodes(config)).to.not.include('NJ');
  });
  it('with object = true, returns an object of country names-codes', () => {
    const config = { object: true };
    expect(getCodes(config)).to.be.an('object');
    expect(Object.keys(getCodes(config))).to.have.a.lengthOf(249);
    expect(getCodes(config)).to.have.property('San Pedro y Miquelón');
    expect(getCodes(config)).to.not.have.property('Islas Canarias');
    expect(getCodes(config)).to.not.have.property('El país de Nunca Jamás');
    expect(getCodes(config)).to.have.property('San Pedro y Miquelón', 'PM');
  });
  it('with object = true & extended = true, returns an object of all country names-codes', () => {
    const config = { object: true, extended: true };
    expect(getCodes(config)).to.be.an('object');
    expect(Object.keys(getCodes(config))).to.have.a.lengthOf(262);
    expect(getCodes(config)).to.have.property('San Pedro y Miquelón');
    expect(getCodes(config)).to.have.property('Islas Canarias');
    expect(getCodes(config)).to.not.have.property('El país de Nunca Jamás');
    expect(getCodes(config)).to.have.property('San Pedro y Miquelón', 'PM');
    expect(getCodes(config)).to.have.property('Islas Canarias', 'IC');
  });
});
