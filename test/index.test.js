const { getCountry, getCode, getCountries, getCodes } = require('../index');

describe('getCountry function', () => {
  it('returns a country name from a code', () => {
    expect(getCountry('GE')).to.equal('Georgia');
  });
  it('returns a country name from a reserved code', () => {
    expect(getCountry('UK')).to.equal('Reino Unido');
  });
  it('returns undefined if the code is not in list', () => {
    expect(getCountry('RT')).to.be.undefined;
  });
});

describe('getCode function', () => {
  it('returns a code from a country name', () => {
    expect(getCode('Georgia')).to.equal('GE');
  });
  it('returns a reserved code from a country name', () => {
    expect(getCode('Sahara Occidental')).to.equal('EH');
  });
  it('returns undefined if the country name is not in list', () => {
    expect(getCode('El país de Nunca Jamás')).to.be.undefined;
  });
});

describe('getCountries function', () => {
  it('without config, returns an array of country names', () => {
    expect(getCountries()).to.be.an('array');
    expect(getCountries()).to.have.a.lengthOf(249);
    expect(getCountries()).to.include('Georgia');
    expect(getCountries()).to.not.include('Unión Soviética');
    expect(getCountries()).to.not.include('El país de Nunca Jamás');
  });
  it('with extended = true, returns an array of all country names (including exceptional)', () => {
    const config = { extended: true };
    expect(getCountries(config)).to.be.an('array');
    expect(getCountries(config)).to.have.a.lengthOf(261);
    expect(getCountries(config)).to.include('Georgia');
    expect(getCountries(config)).to.include('Unión Soviética');
    expect(getCountries()).to.not.include('El país de Nunca Jamás');
  });
  it("with format = 'object', returns an object of codes-country names", () => {
    const config = { format: 'object' };
    expect(getCountries(config)).to.be.an('object');
    expect(Object.keys(getCountries(config))).to.have.a.lengthOf(249);
    expect(getCountries(config)).to.have.property('GE');
    expect(getCountries(config)).to.not.have.property('SU');
    expect(getCountries(config)).to.not.have.property('RT');
    expect(getCountries(config)).to.have.property('GE', 'Georgia');
  });
  it("with format = 'object' & extended = true, returns an object of all codes-country names", () => {
    const config = { format: 'object', extended: true };
    expect(getCountries(config)).to.be.an('object');
    expect(Object.keys(getCountries(config))).to.have.a.lengthOf(261);
    expect(getCountries(config)).to.have.property('GE');
    expect(getCountries(config)).to.have.property('SU');
    expect(getCountries(config)).to.not.have.property('RT');
    expect(getCountries(config)).to.have.property('GE', 'Georgia');
    expect(getCountries(config)).to.have.property('SU', 'Unión Soviética');
  });
});

describe('getCodes function', () => {
  it('without config, returns an array of codes', () => {
    expect(getCodes()).to.be.an('array');
    expect(getCodes()).to.have.a.lengthOf(249);
    expect(getCodes()).to.include('GE');
    expect(getCodes()).to.not.include('SU');
    expect(getCodes()).to.not.include('RT');
  });
  it('with extended = true, returns an array of all codes (including exceptional)', () => {
    const config = { extended: true };
    expect(getCodes(config)).to.be.an('array');
    expect(getCodes(config)).to.have.a.lengthOf(261);
    expect(getCodes(config)).to.include('GE');
    expect(getCodes(config)).to.include('SU');
    expect(getCodes(config)).to.not.include('RT');
  });
  it("with format = 'object', returns an object of country names-codes", () => {
    const config = { format: 'object' };
    expect(getCodes(config)).to.be.an('object');
    expect(Object.keys(getCodes(config))).to.have.a.lengthOf(249);
    expect(getCodes(config)).to.have.property('Georgia');
    expect(getCodes(config)).to.not.have.property('Unión Soviética');
    expect(getCodes(config)).to.not.have.property('El país de Nunca Jamás');
    expect(getCodes(config)).to.have.property('Georgia', 'GE');
  });
  it("with format = 'object' & extended = true, returns an object of all country names-codes", () => {
    const config = { format: 'object', extended: true };
    expect(getCodes(config)).to.be.an('object');
    expect(Object.keys(getCodes(config))).to.have.a.lengthOf(261);
    expect(getCodes(config)).to.have.property('Georgia');
    expect(getCodes(config)).to.have.property('Unión Soviética');
    expect(getCodes(config)).to.not.have.property('El país de Nunca Jamás');
    expect(getCodes(config)).to.have.property('Georgia', 'GE');
    expect(getCodes(config)).to.have.property('Unión Soviética', 'SU');
  });
});
