

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