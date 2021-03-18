

// function getIncrementalIndentedMessages(numOfIndents, message) {
//   let messageArray = [];
//   for (let idx = 0; idx < numOfIndents; idx++) {
//     messageArray.push(" ".repeat(idx + 1) + message);
//   }
//   return messageArray;
// }

// function displayMessages(messageArray) {
//   messageArray.forEach(message => {
//     console.log(message);
//   });
// }

// /* problem 2 Swap Case functions */
// const isUpperCase = (char) => {
//   return (char.toUpperCase() === char);
// };
// //returns the swapped string
// const swapCase = (message) => {
//   return message.split("").map((char) => {
//     if (isUpperCase(char)) {
//       return char.toLowerCase();
//     } else {
//       return char.toUpperCase();
//     }
//   }).join("");
// };

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factors2(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    divisor -= 1;
  }
  return factors;
}

//console.log(factors(0));
console.log(factors2(0));
console.log(factors2(10));





// //main

// //ascii art probblem 1
// let messageArray = getIncrementalIndentedMessages(10, "The Flintstones rock!");
// displayMessages(messageArray);

// //swap case testing

// let munstersDescription = "The Munsters are creepy and spooky.";
// console.log(swapCase(munstersDescription));
