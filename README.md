# node-objectify

[![Build Status](https://travis-ci.org/odino/node-objectify.svg?branch=master)](https://travis-ci.org/odino/node-objectify)

Transform a list of objects into an object, useful
when you want to make your code more eloquent.

``` javascript
var objectify = require('node-objectify');

var countries = [
  {
    code: "us",
    name: "United States"
  },
  {
    code: "it",
    name: "Italy"
  }
]

countries = objectify(countries)

console.log(countries.us.name) // United States
```

## Installation

As usual:

```
npm install --save node-objectiify
```

## Tests

They are very minimal, as this library is a simple utility
to avoid some boilerplate code in your own app -- you can
run them through [mocha](http://mochajs.org/) / `npm test`:

```
~/projects/node-objectify  ᐅ npm test


  node-objectify
    objectify()
      ✓ should convert a list of objects into an object 


  1 passing (5ms)
```