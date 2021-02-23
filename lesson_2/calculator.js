const readline = require('readline-sync'); //imports readline-sync to allow for user input

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}


//psuedocode

prompt("Welcome to Calculator");
// prompt user to provide two numbers
let firstNumber = readline.question(prompt('Please provide the first number.'));
while (invalidNumber(firstNumber)) {
  prompt("Hmmm....doesn't look like you passed a valid number. Try again");
  firstNumber = readline.question(prompt('Please provide the first number'));
}

let secondNumber = readline.question(prompt("Please provide the second number."));
while (invalidNumber(secondNumber)) {
  prompt("Hmmm....doesn't look like you passed a valid number. Try again");
  secondNumber = readline.question(prompt('Please provide the second number'));
}

// prompt user to provide the operaton type

let operation = readline.question(prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'));

while (!(['1', '2', '3', '4'].includes(operation))) {
  prompt("Hmmm....doesn't look like you passed a valid operation. Try again");
  operation = readline.question(prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'));
}

//perform the calculation
let result;
switch (operation) {
  case "1":
    result = Number(firstNumber) + Number(secondNumber);
    break;
  case '2':
    result = Number(firstNumber) - Number(secondNumber);
    break;
  case '3':
    result = Number(firstNumber) * Number(secondNumber);
    break;
  case '4':
    result = Number(firstNumber) / Number(secondNumber);
    break;
}
//display the result
console.log(prompt(`The result is: ${result}.`));

