const MESSAGES = require('./calculator_config.json');

const readline = require('readline-sync'); //imports readline-sync to allow for user input

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}


//psuedocode


// prompt user to provide two numbers
function getNumbers() {
  let firstNumber = readline.question(prompt(MESSAGES.firstNumMessage));
  while (invalidNumber(firstNumber)) {
    prompt(MESSAGES.invalidNumber);
    firstNumber = readline.question(prompt(MESSAGES.firstNumMessage));
  }

  let secondNumber = readline.question(prompt(MESSAGES.secondNumMessage));
  while (invalidNumber(secondNumber)) {
    prompt(MESSAGES.invalidNum);
    secondNumber = readline.question(prompt(MESSAGES.secondNumMessage));
  }
  return [firstNumber, secondNumber];
}

// prompt user to provide the operaton type
function getOperation() {
  let operation = readline.question(prompt(MESSAGES.operationMessage));

  while (!(['1', '2', '3', '4'].includes(operation))) {
    prompt(MESSAGES.invalidOperation);
    operation = readline.question(prompt(MESSAGES.operationMessage));
  }
  return operation;
}

//perform the calculation
function calculate(firstNumber, secondNumber, operation) {
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
  return result;
}

let again = 'y';
let firstNumber;
let secondNumber;
let operation;
while (again) {
  prompt(MESSAGES.welcome);
  [firstNumber, secondNumber] = getNumbers();
  operation = getOperation();
  console.log(`The result is: ${calculate(firstNumber, secondNumber, operation)}.`);
  console.log(MESSAGES.continueMessage);
  again = readline.question();
  if (again[0].toLowerCase() !== 'y') break;

}

