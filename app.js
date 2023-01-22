const areaFunctions = require('./modules/shape-area.js');

const radius = 5;
const sideLength = 10;

const areaOfCircle = areaFunctions.circleArea(radius);
const areaOfSquare = areaFunctions.squareArea(sideLength);

console.log(`area of circle: ${areaOfCircle}`);
console.log(`area of square: ${areaOfSquare}`);