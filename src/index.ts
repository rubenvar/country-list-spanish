// TODO lots of duplicated code

// import countries from './countries.json';
import { countries } from './countries';

// types
type CountryObject = (typeof countries)[number];
type Code = CountryObject['code'];
type Country = CountryObject['country'];

// build helper objects
const countriesObject = <Record<Code, Country>>{};
const codesObject = <Record<Country, Code>>{};

countries.forEach((obj) => {
  countriesObject[obj.code] = obj.country;
});
countries.forEach((obj) => {
  codesObject[obj.country] = obj.code;
});

// return the country name for a given code
export const getCountry = (code: Code) => countriesObject[code];

// return the code for a given country name
export const getCode = (country: Country) => codesObject[country];

type Props = {
  object?: boolean;
  extended?: boolean;
};

// return an array or an object (with codes as keys) of all countries
export function getCountries(props: Props = {}) {
  // default behaviour: object === false, extended === false
  const { object, extended } = props;

  // if !extended, filter out the "isExtended === true" objects
  const allCountries = !extended ? countries.filter((obj) => !obj.isExtended) : countries;

  if (object) {
    const result = <Record<Code, Country>>{};
    // if object, build and return the object
    allCountries.forEach((obj) => {
      result[obj.code] = obj.country;
    });
    return result;
  }

  // return just the country names
  return allCountries.map((obj) => obj.country);
}

// return an array or an object (with countries as keys) of all country codes
export function getCodes(props: Props = {}) {
  const { object, extended } = props;

  // if !extended, filter out the "isExtended === true" objects
  const allCountries = !extended ? countries.filter((obj) => !obj.isExtended) : countries;

  if (object) {
    const result = <Record<Country, Code>>{};
    // if object, build and return the object
    allCountries.forEach((obj) => {
      result[obj.country] = obj.code;
    });
    return result;
  }

  // return just the country codes
  return allCountries.map((obj) => obj.code);
}
