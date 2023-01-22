const converter = require('./modules/converter.js');

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converter.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converter.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);