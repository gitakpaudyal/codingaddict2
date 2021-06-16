/*going great
/*let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceship.crew.captain['favorite foods'][0];
spaceship.passengers = [{name:'Elon'}, 'Donald'];
let firstPassenger = spaceship.passengers[0];
const spaceship = {
  telescope: {
     yearBuilt: 2018,
     model: '91031-XLT',
     focalLength: 2032 
  },
 crew: {
     captain: { 
         name: 'Sandra', 
         degree: 'Computer Engineering', 
         encourageTeam() { console.log('We got this!') } 
      }
 },
 engine: {
     model: 'Nimbus2000'
  },
  nanoelectronics: {
      computer: {
         terabytes: 100,
         monitors: 'HD'
      },
     'back-up': {
        battery: 'Lithium',
        terabytes: 50
      }
 }
}; 
spaceship.nanoelectronics.computer.battery; // Returns 'Lithium'

/*

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {console.log(retreatMessage)},
  takeOff() {console.log('Spim... Borp... Glix... Blastoff!')}
}

alienShip.retreat();
alienShip.takeOff();//
A property is what an object has, while a method is what an object does.
For example console is a global javascript object and .log() is a method 
on that object. 
Math is also a global javascript object and .floor() is a method on it.
We can include methods in our object literals by creating ordinary, comma-separated key-value pairs. 
The key serves as our method’s name, while the value is an anonymous function expression.

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. 
Instead of Earth, it shall be called New Xaculon.'
/*
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 5;
delete spaceship['Secret Mission'];

/*Objects are mutable meaning we can update them after we create them!

We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.

It’s important to know that although we can’t reassign an object declared with const, 
we can still mutate it, meaning we can add new properties and change the properties that are there.

const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
/*

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];
console.log(spaceship['Active Mission']);
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

/*Objects
An object is a built-in data type for storing key-value pairs.
 Data inside objects are unordered, 
and the values can be of any type.

JavaScript Objects are Mutable
JavaScript objects are mutable, meaning their contents 
can be changed, even when they are declared as const. New properties can be added, and existing property values can be changed or deleted.

It is the reference to the object,
 bound to the variable, that cannot be changed.


const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
}
 
console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }
 
delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }
 
student = {}
// TypeError: Assignment to constant variable.

*/

/*There are only seven fundamental data types in JavaScript,
 and six of those are the primitive data types: string, number,
  boolean, null, undefined, and symbol. With the seventh type,
   objects, we open our code to more complex possibilities.
    We can use JavaScript objects to model real-world things, 
    like a basketball, or we can use objects to build the data structures
     that make the web possible.*/
/*
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
   return word.length < 6
      
   }
));

// Use filter to create a new array
const interestingWords = words.filter(word => word.length > 5);


// Make sure to uncomment the code below and fix the incorrect code before running it

 console.log(interestingWords.every((word) => word.length > 5 ));

/*const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => animal === 'elephant');
const startsWithS = animals.findIndex(animal => animal[0] === 's');

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

/*const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumber => randomNumber < 250);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWord => favoriteWord.length > 7);



const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']


/*

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0])

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumber => bigNumber/100);
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0])

console.log(secretMessage)

/*const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const arrLen = animals.length;
console.log(arrLen);
const secretMessage = animals.map(animal => {
  for(let i = 0; i < arrLen - 1; i++){
    //return animals[i][0];
    console.log(animals[i][0]);
  }
 
})


/*const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
for(let i = 0; i < animals.length - 1; i++){
  console.log(animals[i][0]);
}
  /*
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
/*

fruits = ['appple', 'kiwi'];
//console.log(fruits[0][1])

for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i][0];
    console.log(element);
  }

  //console.log(element)
  //console.log(fruits[i]);


/*const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]


//
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => {
  console.log('I want to eat a '+fruit);
});


let groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];
//define traditional funtion
function printGrocery(element){
  console.log('--'+element)
  
}
//forEach takes callback function or you can define there as well.
groceries.forEach(printGrocery);
 
//callback defined right there
groceries.forEach(grocery => {
  console.log(grocery);
});
/*
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
}

const addOneToOne = () => 1 + 1;

timeFuncRuntime(addOneToOne);


timeFuncRuntime(() => {
  for (let i = 10; i>0; i--){
    console.log(i);
  }
});

/*const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  if(rapperArray[i] == "Notorious B.I.G."){
    console.log(rapperArray[i]);
    break;
  }
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.")


const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
// Write your code below
while(currentCard != 'spade'){
  //currentCard = cards[Math.floor(Math.random() * 4)];
  //console.log(currentCard)
  //console.log(Math.floor(Math.random() * 4))
}

for(var a = 5; a <= 10; a++){
  for(var b = 3; b > 0; b--){
   console.log("InnerLoop");
  }
  console.log("outerLoop");

}

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};


let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
//console.log(bobsFollowers);

let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  console.log(j);
   
  }
};
*/
/*defining array

const fruits = ["apple", "kiwi", "banana"]
*/