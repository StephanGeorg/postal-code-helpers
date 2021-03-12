# Postal code helpers

Lightweight helpers for working with international postal code data to extract, validate or s

## Installation

```
> npm i postal-code-helpers
```

```javascript
import postalCodeHelpers from 'postal-code-helpers';
```

## Usage
### Extract postal code from string

```javascript

postalCodeHelpers.extract('this is a postal code 10999', 'DE'); // ['10999']

postalCodeHelpers.extract('this .10247, is a r23412345341 postal code 10999', 'DE'); // ['10247', '10999']

postalCodeHelpers.extract('this is a post code 1099921342345 inside a 1024 string', 'DE'); // null

```

### Validate postal code

```javascript

postalCodeHelpers.validate('10999', 'DE'); // true

postalCodeHelpers.validate('1234', 'DE'); // false

```

### Locate countries for postal codes

```javascript

postalCodeHelpers.locate('SE1 6DR'); // [ 'GB' ]

postalCodeHelpers.locate('this is not a postal code'); // []

```

## Data source
Geonames
