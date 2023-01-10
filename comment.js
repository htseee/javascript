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
const area = areaRectangle(width, height);
const areaRect = function(width, height) {
    return width * height;
}
const areaR = (width, height) => width * height;

console.log(`Function areaRectangle: ${area}`);
console.log(`Function anonymous areaRect: ${areaRect(width, height)}`);
console.log(`Function arrow areaR: ${areaR(width, height)}`);

function areaRectangle(width, height) {
    return width * height;
}

console.log('hi');

const userChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
    return userInput;
  } else {
    console.log('error');
  }
}
const computerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return 'rock';
  } else if (number === 1) {
    return 'paper';
  } else {
    return 'scissor';
  }
}
const determineWinner = (user, computer) => {
  if (user === computer) {
    return 'The game is a tie!';
  } else if (user === 'rock') {
    if (computer === 'paper') {
      return 'computer won';
    } else {
      return 'user won';
    }
  } else if (user === 'scissor') {
    if (computer === 'paper') {
      return 'user won';
    } else {
      return 'computer won';
    }
  } else if (user === 'paper') {
    if (computer === 'rock') {
      return 'user won';
    } else {
      return 'computer won';
    }
  }
}
let user = userChoice('paper');
let computer = computerChoice();
console.log(`User: ${user}, computer: ${computer}`);
console.log(determineWinner(user, computer));

const sleepHours = (day) => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else if (day === 'sunday') {
      return 8;
    }
  }
  const actualSleepHours = () => 8 + 8 + 8 + 8 + 8 + 8 + 8;
  /*
    let sleep = sleepHours('monday') + sleepHours('tuesday') + sleepHours('wednesday') + sleepHours('thursday') + sleepHours('friday') + sleepHours('saturday') + sleepHours('sunday');
    return sleep;
  }
  */
  const idealSleepHours = (idealHours) => idealHours * 7;
  /*
    let idealHours = 7;
    return idealHours * 7;
  }
  */
  const calculateSleepDebt = () => {
    let actualSleep = actualSleepHours();
    let idealSleep = idealSleepHours(7);
    let actual = actualSleep - idealSleep;
    if (actualSleep === idealSleep) {
      console.log('user got perfect amount of sleep');
    } else if (actualSleep > idealSleep) {
      console.log(`user got more sleep than needed. ${actual} hours user sleep over.`);
    } else if (actualSleep < idealSleep) {
      console.log(`user should get some rest. ${actual} hours user sleep under.`);
    }
  }
  console.log(actualSleepHours());
  console.log(idealSleepHours(7));
  calculateSleepDebt();

  const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // The scope of `days` is too tight 
  const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
  
  // The scope of `name` is too tight 
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  const name = 'Nala';
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  logEvent(name, event);
  logTime(name, days);
  
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';
  logEvent(name2, event2);
  logTime(name2, days2);
  
  let grocery = ['fruits', 'pasta', 'vegetable', 'meat', 'fish', 'shellfish', 'drinking water', 'milk', 'juice', 'smoothies', 'soft drinks', 'oil', 'beans', 'seeds'];
  let array = [];
  console.log(grocery.some(element => element === 'fruits'));
  console.log(grocery.every(element => element === 'fruits'));
  array = grocery.slice(0, 3);
  array = array.concat(grocery.slice(4, 6));
  console.log(array);
  array = grocery.filter(char => char[0] != 'f');
  console.log(array);
  array = grocery.filter(char => char[0] == 'f');
  console.log(array);
  console.log(grocery.find(char => char[0] != 'f'));
  console.log(grocery.findIndex(element => element === 'meat'));
  console.log(grocery.forEach(element => {
    if (element[0] != 's') {
        console.log(element);
    }
  }));
  console.log(grocery.includes('seeds'));
  console.log(grocery.indexOf('seeds'));
  console.log(Array.isArray(grocery));
  console.log(grocery.join());
  console.log(grocery.lastIndexOf('seeds'));
  console.log(grocery.length);
  array = grocery.map(element => element + '!!!');
  console.log(array);
  let f = grocery.pop();
  console.log(f);
  console.log(grocery);
  grocery.push(f);
  console.log(grocery);
  console.log(grocery.reduce((acc, curr) => acc + curr));
  console.log(grocery.reverse());
  f = grocery.shift();
  console.log(f);
  console.log(grocery);
  grocery.unshift(f);
  console.log(grocery);
  console.log(grocery.sort());
  grocery.splice(2, 0, '1', '2');
  console.log(grocery);
  console.log(grocery.toString());
  array = grocery.valueOf();
  console.log(array);

let input = 'this is the game';
const vowel = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowel.length; j++) {
    if (input[i] === vowel[j]) {
      resultArray.push(input[i]);
    }
    //console.log(j);
  }
  //console.log(i) ;
}
let resultString = resultArray.join();
resultString = resultString.toUpperCase();
console.log(resultString);

const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);
    if (checkA === checkB) {
      return checkB;
    } else {
      return 'inconsistent results';
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 4));

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 14,
  _sentient: false,
  _armor: 'Steel-plated',
  provideInfo() {
    return `I am ${this._model} and my current energy level is ${this._energyLevel}.`;
  },
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  },
  get numOfSensors() {
    if (typeof _numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      console.log('Sensors are currently down.');
    }
  },
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
console.log(robot.provideInfo());
console.log(robot.energyLevel);
robot.numOfSensors = 100;
console.log(robot.numOfSensors);
const {functionality} = robot;
functionality.beep();
const robotKeys = Object.keys(robot);
console.log(robotKeys);
const robotEntries = Object.entries(robot);
console.log(robotEntries);
const newRobot = Object.assign({}, robot, {laserBlaster: true, voiceRecognition: true});
console.log(newRobot);

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();
console.log(`Robot model ${tinCan.model}`);
console.log(`Robot mobile ${tinCan.mobile}`);

const menu = {
  _meal: [],
  _price: [],
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'object') {
      this._meal = mealToCheck;
    }  
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'object') {
      this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      let mealIndex = Math.floor(Math.random() * this._meal.length);
      return `Today's Special is ${this._meal[mealIndex]} for ${this._price[mealIndex]}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};
menu.meal = ['Meat', 'Spaghetti', 'Fish', 'Rice'];
menu.price = [13, 7, 10, 4];
console.log(menu.todaysSpecial);