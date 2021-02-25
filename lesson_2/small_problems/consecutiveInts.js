const readline = require('readline-sync');

//ask user for integer greater than 0
console.log("Please enter an integer greater than 0.");
let stop = parseInt(readline.prompt(), 10);
// user validation for stop
while (stop < 0) {
  console.log("Please enter an integer greater than 0.");
  stop = parseInt(readline.prompt(), 10);
}
//ask user to choose an operation
console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let operation = readline.prompt();
//input validation for operation
while (!['s','p'].includes(operation)) {
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  operation = readline.prompt();
}
// calculate totals depending on operation
let total;
total = (operation === 's') ? 0 : 1;
for (let counter = 1; counter <= stop; counter++) {
  if (operation === 's') {
    total += counter;
  } else {
    total *= counter;
  }
}
//display result
console.log(`The product of the integers between 1 and ${stop} is ${total}.`);