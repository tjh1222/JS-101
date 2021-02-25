const readLine = require('readline-sync');

//prompt user for the bill amount
console.log('What is the bill?');
let bill = Number(readLine.prompt());

//get tip percentage
console.log("What is the tip percentage?");
let tipPercentage = Number(readLine.prompt());
let tip = bill * (tipPercentage / 100);

//display tip and total
console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${(bill + tip).toFixed(2)}`);