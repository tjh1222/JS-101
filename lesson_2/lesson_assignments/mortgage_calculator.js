/* Inputs for function: loan amount, APR(provided as integer, and loan duration)
*/

const readline = require('readline-sync');
const message = require('./mortgage_config.json');


function isInvalidNumber(num) {
  if (Number.isNaN(num) || Number(num) < 0) {
    return true;
  }
  return false;
}

//get loan amount and validates input
function getLoanAmount() {
  let loanAmount = Number(readline.question(message.loanAmount));
  while (isInvalidNumber(loanAmount)) {
    loanAmount = Number(readline.question(message.loanAmount));
  }
  return loanAmount;
}
//Validates input and converts to monthly interest rate.
function getMonthlyInterest() {
  let monthlyInterest = Number(readline.question(message.APR)) / 12;
  while (isInvalidNumber(monthlyInterest)) {
    monthlyInterest = Number(readline.question(message.APR));
  }
  return monthlyInterest / 100;
}

function getDuration() {
  let months = Number(readline.question(message.duration)) * 12;
  while (isInvalidNumber(months)) {
    months = Number(readline.question(message.duration));
  }
  return months;
}

function proceed() {
  let proceed = readline.question(message.proceed);
  return (proceed.toLowerCase() === 'y');
}

function calculateMonthlyPayment(loanAmount, monthlyInterest, monthlyDuration) {
  let monthlyPayment = loanAmount * (monthlyInterest /
                    (1 - Math.pow((1 + monthlyInterest), (-monthlyDuration))));
  console.log(`The monthly payment is $${monthlyPayment.toFixed(2)}`);
}

let loanAmount = getLoanAmount();
let monthlyInterest = getMonthlyInterest();
let duration = getDuration();
calculateMonthlyPayment(loanAmount, monthlyInterest, duration);
let again = proceed();

while (again) {
  loanAmount = getLoanAmount();
  monthlyInterest = getMonthlyInterest();
  duration = getDuration();
  calculateMonthlyPayment(loanAmount, monthlyInterest, duration);
  again = proceed();
}
