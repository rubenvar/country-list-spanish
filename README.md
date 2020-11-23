# Country List, in Spanish

## What is this?

Get the country name **in Spanish** for any [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code, and vice versa.

The full list of 262 country names and codes in this package is composed as follows:

- 249 [officially assigned](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) code elements.
- 12 [exceptionally reserved](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Exceptional_reservations) code elements.
- 1 extra code element _added for functionallity_.

## Installation

As with any other node package:

```bash
npm install country-list-spanish
```

## Usage

The package exports **four functions**:

### getCountry(_code_)

Arguments: 1, `string`, an _ISO 3166-1 alpha-2_ code.

Returns: `string`, a country name **in Spanish**.

If the code parameter is left empty or it's not in the list, returns `undefined`.

#### Example

```js
const { getCountry } = require("country-list-spanish");

console.log(getCountry("PM")); // logs 'San Pedro y Miquelón'
console.log(getCountry("IC")); // logs 'Islas Canarias'
console.log(getCountry("NJ")); // logs undefined
```

### getCode(_country_)

Arguments: 1, `string`, a country name **in Spanish**.

Returns: `string`, an _ISO 3166-1 alpha-2_ code.

If the country parameter is left empty or it's not in the list, returns `undefined`.

#### Example

```js
const { getCode } = require("country-list-spanish");

console.log(getCode("San Pedro y Miquelón")); // logs 'PM'
console.log(getCode("Islas Canarias")); // logs 'IC'
console.log(getCode("País de Nunca Jamás")); // logs undefined
```

### getCountries(_config_)

Arguments: 0 or 1, `object`, a config object (see table below and examples).

Returns: `array` (default) or `object`, with all the countries in the list.

By **default**, the function returns an array with all 249 official country names in it.

If `{object: true}` is passed as _config_, the function returns an object of **code-country** (key-value) pairs.

If `{extended: true}` is passed, the _exceptionally reserved_ codes are included in the response.

#### Example

```js
const { getCountries } = require("country-list-spanish");

console.log(getCountries()); // logs [Andorra, Emiratos Árabes Unidos, ...], an array of length 249
console.log(getCountries({ object: true, extended: true })); // logs {AD: "Andorra", AE: "Emiratos Árabes Unidos", ...}, an object with 262 kay-value pairs
```

### getCodes(_config_)

Arguments: 0 or 1, `object`, a config object (see below).

Returns: `array` (default) or `object`, with all the codes in the list.

By **default**, the function returns an array with all 249 official codes in it.

If `{object: true}` is passed as _config_, the function returns an object of **country-code** (key-value) pairs.

If `{extended: true}` is passed, the _exceptionally reserved_ codes are included in the response.

```js
const { getCodes } = require("country-list-spanish");

console.log(getCodes({ object: true })); // logs {Andorra: "AD", Emiratos Árabes Unidos: "AE", ...}, an object with 249 kay-value pairs
```

### Config object

| param    | type      | default | feature                                    |
| -------- | --------- | ------- | ------------------------------------------ |
| object   | `boolean` | false   | Return an array or an object               |
| extended | `boolean` | false   | Include the 13 reserved/extra codes or not |
