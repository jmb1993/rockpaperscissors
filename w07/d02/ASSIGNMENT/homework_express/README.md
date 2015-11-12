# Express Exercises

Build two Express apps, a calculator and a countries of the world lookup application.


## Part 1 | Calculator

- Create an application folder
- `npm init`
- `npm install --save express` (`sudo` if necessary)

Write an Express application which will perform a simple arithmetical operation as indicated by the URL and display the result in the browser. For example,
```
localhost:3000/add/1043/2911
```
should display
```
1043 + 2911 = 3954
```
- The application should use module(s).
- The application should cover addition, multiplication, subtraction, and division.
- **BONUS:** Cover other mathematical operations (exponentiation, roots, logarithms). Handle error cases, such as division by zero.

## Part 2 | Countries of the World
- Create an application folder
- `npm init`
- `npm install --save express` (`sudo` if necessary)
- `npm install --save iso-countries` (`sudo` if necessary)

This application will take advantage of the Node.js package iso-countries, which serves a JSON data object containing data on all the countries of the world. Examine [the documentation here](https://github.com/psmithuk/iso-countries/blob/master/dist/countries.js). Access it with code like the following:

``` js
allCountries = require('iso-countries');
console.log(allCountries.countries.US.name); // 'United States of America'
```

In `index.js`, write an Express application which will perform a simple data lookup operation as indicated by the URL and display the result in the browser. For example,
```
localhost:3000/US/region
```
should display
```
Americas
```
- The application should use module(s).
- **BONUS:** Allow the user to put the country name in the URL.
