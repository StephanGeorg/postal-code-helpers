# Postal code helpers [![npm version](https://badge.fury.io/js/postal-code-helpers.svg)](https://badge.fury.io/js/postal-code-helpers)

Lightweight helpers for working with [international postal code](#supported-countries) data to [extract](#extract-postal-code-from-string), [validate](#validate-postal-code) or [locate](#locate-countries-for-postal-codes) postal codes based on [GeoNames](https://www.geonames.org/postal-codes/) data.

## Installation

```
npm i postal-code-helpers
```

```javascript
import postalCodeHelpers from 'postal-code-helpers';
```

## Usage
### Extract postal code from string

```javascript

postalCodeHelpers.extract('this is a postal code 10999', 'DE'); 
// ['10999']

postalCodeHelpers.extract('this .10247, is a r23412345341 postal code 10999', 'DE'); 
// ['10247', '10999']

postalCodeHelpers.extract('this is a post code 1099921342345 inside a 1024 string', 'DE'); 
// null

```

### Validate postal code

Validates a postal codes against the country pattern. Attention: This validation does not check whether a postal code actually exists!

```javascript

postalCodeHelpers.validate('10999', 'DE');
// true

postalCodeHelpers.validate('1234', 'DE'); 
// false

```

### Locate countries for postal codes

```javascript

postalCodeHelpers.locate('SE1 6DR'); 
// [ 'GB' ]

postalCodeHelpers.locate('this is not a postal code'); 
// null

```

## Data source
Geonames

## Supported countries

AD, AL, AM, AR, AS, AT, AU, AX, AZ, BA, BB, BD, BE, BG, BH, BL, BM, BN, BR, BY, CA, CH, CL, CN, CO, CS, CR, CU, CV, CX, CY, CZ, DE, DK, DO, DZ, EC, EE, EG, ES, ET, FI, FM, FO, FR, GB, GE, GF, GG, GL, GP, GR, GT, GU, GW, HN, HR, HT, HU, ID, IE, IL, IM, IN, IQ, IR, IS, IT, JE, JO, JP, KE, KG, KH, KP, KR, KW, KZ, LA, LB, LI, LK, LR, LS, LT, LU, LV, MA, MC, MD, ME, MF, MG, MH, MK, MM, MN, MP, MQ, MT, MV, MW, MX, MY, MZ, NC, NE, NF, NG, NI, NL, NO, NP, NZ, OM, PF, PG, PH, PK, PL, PM, PR, PT, PW, PY, RE, RO, RS, RU, SA, SD, SE, SG, SH, SI, SJ, SK, SM, SN, SO, SV, SZ, TC, TH, TJ, TM, TN, TR, TW, UA, US, UY, UZ, VA, VE, VI, VN, WF, YT, ZA, ZM
