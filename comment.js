console.log(35);
console.log(4);
console.log('Hello' + ' ' + 'World');
console.log('Teaching the world how to code'.length);
console.log('    Remove whitespace   '.trim());
console.log('Codecademy'.toUpperCase());
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2222.222));

var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true;
changeMe = false;
console.log(changeMe);

const entree = 'Enchiladas';
console.log(entree);

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

let gainedDollar = 3;
let lostDollar = 50;
gainedDollar++;
lostDollar--;
console.log(gainedDollar);
console.log(lostDollar);

let myName1 = 'Denis';
let myCity = 'Moscow';
console.log(`My name is ${myName1}. My favorite city is ${myCity}.`);

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

let myVariable = 'string';
let myVariable1 = 1;
console.log(`The string ${myVariable} is ${myVariable1}`);
let test = myVariable + myVariable1;
console.log(typeof test);

//kelvin constant
const kelvin = 293;
//celsius constant
const celsius = kelvin - 273;
//fahrenheit temperature round down
let fahrenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);


const myAge = 3;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
console.log(`Later Years: ${laterYears}`);
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Denis'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

const width = 6;
const height = 8;
const area = width * height;
console.log(area);