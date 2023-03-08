# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

This is tagged as a **major release** as the code has been refactored, files relocated, etc. However, everything should work fine as no changes were done to the exported functions' syntax.

### Changed

- Refactor main code to TS.
- Replace `mocha` and `chai` with `jest`.
- Fix countries list (remove duplicated name, code UK).
- Add eslint.
- Relocate files.
- Add TS configs.
- Add `release-it`.

## [0.3.2] - 2023-03-08

### Fixed

- Fixed MK name.

## [0.3.1] - 2023-03-07

### Fixed

- Fixed GB name.

## [0.3.0] - 2022-03-14

### Added

- Added CQ exceptional code.

### Changed

- Updated readme.
- Updated tests.
- Updated dev dependencies.

### Fixed

- Fixed alphabetical order in exceptional codes.
- Fixed EZ code ("Europa" ⟶ "Eurozona").

## [0.2.1] - 2020-11-23

### Changed

- Edits in readme and package.json

## [0.2.0] - 2020-11-11

🎊 Initial release

### Added

- Main functions:
  - Get the country name from a given code.
  - Get the code from a given country name.
- Functions to get all the data:
  - Get all country names as array or object.
  - Get all codes as array or object.
- README, CHANGELOG, LICENSE.
- Tests for all the functions.
