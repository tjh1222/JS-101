// function fib(index) {
//   if (index === 1n || index === 2n) {
//     return 1n;
//   }
//   return fib(index - 2n) + fib(index - 1n);
// };
function fib(target) {
  let current = 1n;
  let prev1 = 1n;
  let prev2 = 1n;
  for (let idx = 1n; idx < target + 1n; idx++) {
    if (idx > 2n) {
      current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
    }
  }
  return current;
}

let getNumOfDigits = function(number) {
  return String(number).length;
};

function findFibonacciIndexByLength(targetDigit) {
  let counter = 0n;
  let numOfDigits = 0n;
  while (numOfDigits < targetDigit) {
    counter += 1n;
    let number = fib(counter);
    numOfDigits = getNumOfDigits(number);
  }
  return counter;
}


console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);