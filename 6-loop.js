// The For Loop
for(let counter =5; counter <11; counter++)
{
  console.log(counter);
};

// Looping in Reverse
for (let counter = 3; counter >= 0; counter--)
{
    console.log(counter);
};

// Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i =0; i < vacationSpots.length; i++){
  console.log('I would love to visit '+ vacationSpots[i]);
}

// Nested Loops
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
};

// The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = [];
while (currentCard != 'spade'){currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);
};

// Do...While Statements
let countString = '';
let i = 0;
do {
  countString = countString + i;
  i++;
} while (i < 5);
console.log(countString);

//example 1
const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

//example2
let cupsOfSugarNeeded = 3;
let cupsAdded= 0;
do {
   cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

// The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");



