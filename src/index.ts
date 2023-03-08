import countries from './countries.json';

const countriesObject = {};
const codesObject = {};
countries.forEach(obj => (countriesObject[obj.code] = obj.country));
countries.forEach(obj => (codesObject[obj.country] = obj.code));

// return the country name for a given code
const getCountry = code => countriesObject[code];
// return the code for a given country name
const getCode = country => codesObject[country];

// return an array or an object (with codes as keys) of all countries
function getCountries(props = {}) {
  // default behaviour: object === false, extended === false
  const { object, extended } = props;
  let allCountries = countries;

  if (!extended) allCountries = countries.filter(obj => !obj.extended);

  if (object) {
    const result = {};
    allCountries.forEach(obj => (result[obj.code] = obj.country));
    return result;
  }
  return allCountries.map(obj => obj.country);
}

// return an array or an object (with countries as keys) of all country codes
function getCodes(props = {}) {
  const { object, extended } = props;
  let allCountries = countries;

  if (!extended) allCountries = countries.filter(obj => !obj.extended);

  if (object) {
    const result = {};
    allCountries.forEach(obj => (result[obj.country] = obj.code));
    return result;
  }
  return allCountries.map(obj => obj.code);
}
