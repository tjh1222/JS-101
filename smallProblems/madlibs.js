/*
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.
*/

/*
  write a function that gets user input and returns an object
  representing the noun, verb, adj, adverb
*/

const readline = require('readline-sync');

function getUserInput() {
  let userInput = {};
  userInput['noun'] = readline.question('Enter a noun: ');
  userInput['verb'] = readline.question('Enter a verb: ');
  userInput['adjective'] = readline.question('Enter an adjective: ');
  userInput['adverb'] = readline.question('Enter an adverb: ');
  return userInput;

}

function displayMadLibs(noun, verb, adjective, adverb) {
  console.log(`Do you ${verb} your ${adjective} ${noun}? That's hilarious!`);
  console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
}
let {noun, verb, adjective, adverb} = getUserInput();
displayMadLibs(noun, verb, adjective, adverb);