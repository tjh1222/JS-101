const readline = require('readline-sync');
//promp user to get two integers
let num1 = Number(readline.question('Enter the first number\n'));
let num2 = Number(readline.question('Enter the second number\n'));

function add(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
function subtract(num1, num2) {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
}
function multiply(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 * num2}`);
}
function divide(num1, num2) {
  console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
}
function remainder(num1, num2) {
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
}
function power(num1, num2) {
  console.log(`${num1} ** ${num2} = ${Math.pow(num1, num2)}`);
}

add(num1, num2);
subtract(num1, num2);
multiply(num1, num2);
divide(num1, num2);
remainder(num1, num2);
power(num1, num2);
