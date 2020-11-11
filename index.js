import countries from './countries.json';

// return the country name for a given code
export function getCountry(code) {
  return countries.find(obj => obj.code === code)?.country;
}

// return the code for a given country name
export function getCode(country) {
  return countries.find(obj => obj.country === country)?.code;
}

// return an array or an object (with codes as keys) of all countries
export function getCountries(props = {}) {
  // default behaviour: format === 'object', extended === false
  const { format, extended } = props;
  let allCountries = countries;

  if (!extended) allCountries = countries.filter(obj => !obj.extended);

  if (format === 'object') {
    const result = {};
    allCountries.forEach(obj => (result[obj.code] = obj.country));
    return result;
  }
  return allCountries.map(obj => obj.country);
}

// return an array or an object (with countries as keys) of all country codes
export function getCodes(props = {}) {
  const { format, extended } = props;
  let allCountries = countries;

  if (!extended) allCountries = countries.filter(obj => !obj.extended);

  if (format === 'object') {
    const result = {};
    allCountries.forEach(obj => (result[obj.country] = obj.code));
    return result;
  }
  return allCountries.map(obj => obj.code);
}
