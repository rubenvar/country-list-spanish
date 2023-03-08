import { getCountry, getCode, getCountries, getCodes } from '../index';

test('getCountry function', () => {
  it('returns a country name from a code', () => {
    expect(getCountry('PM')).toEqual('San Pedro y Miquelón');
  });
  it('returns a country name from a reserved code', () => {
    expect(getCountry('IC')).toEqual('Islas Canarias');
  });
  it('returns undefined if the code is not in list', () => {
    // @ts-expect-error country doesn't exists
    expect(getCountry()).toBeUndefined();
    // @ts-expect-error country doesn't exists
    expect(getCountry('NJ')).toBeUndefined();
  });
});

describe('getCode function', () => {
  it('returns a code from a country name', () => {
    expect(getCode('San Pedro y Miquelón')).toEqual('PM');
  });
  it('returns a reserved code from a country name', () => {
    expect(getCode('Islas Canarias')).toEqual('IC');
  });
  it('returns undefined if the country name is not in list', () => {
    // @ts-expect-error country doesn't exists
    expect(getCode('País de Nunca Jamás')).toBeUndefined();
  });
});

describe('getCountries function', () => {
  it('without config, returns an array of country names', () => {
    expect(Array.isArray(getCountries())).toBe(true);
    expect(getCountries()).toHaveLength(249);
    expect(getCountries()).toContain('San Pedro y Miquelón');
    expect(getCountries()).not.toContain('Islas Canarias');
    expect(getCountries()).not.toContain('El país de Nunca Jamás');
  });
  it('with extended = true, returns an array of all country names (including exceptional)', () => {
    const config = { extended: true };
    expect(Array.isArray(getCountries(config))).toBe(true);
    expect(getCountries(config)).toHaveLength(263);
    expect(getCountries(config)).toContain('San Pedro y Miquelón');
    expect(getCountries(config)).toContain('Islas Canarias');
    expect(getCountries()).not.toContain('El país de Nunca Jamás');
  });
  it('with object = true, returns an object of codes-country names', () => {
    const config = { object: true };
    expect(typeof getCountries(config)).toBe('object');
    expect(Object.keys(getCountries(config))).toHaveLength(249);
    expect(getCountries(config)).toHaveProperty('PM');
    expect(getCountries(config)).not.toHaveProperty('IC');
    expect(getCountries(config)).not.toHaveProperty('NJ');
    expect(getCountries(config)).toHaveProperty('PM', 'San Pedro y Miquelón');
  });
  it('with object = true & extended = true, returns an object of all codes-country names', () => {
    const config = { object: true, extended: true };
    expect(typeof getCountries(config)).toBe('object');
    expect(Object.keys(getCountries(config))).toHaveLength(263);
    expect(getCountries(config)).toHaveProperty('PM');
    expect(getCountries(config)).toHaveProperty('IC');
    expect(getCountries(config)).not.toHaveProperty('NJ');
    expect(getCountries(config)).toHaveProperty('PM', 'San Pedro y Miquelón');
    expect(getCountries(config)).toHaveProperty('IC', 'Islas Canarias');
  });
});

describe('getCodes function', () => {
  it('without config, returns an array of codes', () => {
    expect(Array.isArray(getCodes())).toBe(true);
    expect(getCodes()).toHaveLength(249);
    expect(getCodes()).toContain('PM');
    expect(getCodes()).not.toContain('IC');
    expect(getCodes()).not.toContain('NJ');
  });
  it('with extended = true, returns an array of all codes (including exceptional)', () => {
    const config = { extended: true };
    expect(Array.isArray(getCodes(config))).toBe(true);
    expect(getCodes(config)).toHaveLength(263);
    expect(getCodes(config)).toContain('PM');
    expect(getCodes(config)).toContain('IC');
    expect(getCodes(config)).not.toContain('NJ');
  });
  it('with object = true, returns an object of country names-codes', () => {
    const config = { object: true };
    expect(typeof getCodes(config)).toBe('object');
    expect(Object.keys(getCodes(config))).toHaveLength(249);
    expect(getCodes(config)).toHaveProperty('San Pedro y Miquelón');
    expect(getCodes(config)).not.toHaveProperty('Islas Canarias');
    expect(getCodes(config)).not.toHaveProperty('El país de Nunca Jamás');
    expect(getCodes(config)).toHaveProperty('San Pedro y Miquelón', 'PM');
  });
  it('with object = true & extended = true, returns an object of all country names-codes', () => {
    const config = { object: true, extended: true };
    expect(typeof getCodes(config)).toBe('object');
    expect(Object.keys(getCodes(config))).toHaveLength(263);
    expect(getCodes(config)).toHaveProperty('San Pedro y Miquelón');
    expect(getCodes(config)).toHaveProperty('Islas Canarias');
    expect(getCodes(config)).not.toHaveProperty('El país de Nunca Jamás');
    expect(getCodes(config)).toHaveProperty('San Pedro y Miquelón', 'PM');
    expect(getCodes(config)).toHaveProperty('Islas Canarias', 'IC');
  });
});
