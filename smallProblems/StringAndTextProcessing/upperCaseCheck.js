/*
Write a function that takes a string argument,
 and returns true if all of the alphabetic characters
 inside the string are uppercase; false otherwise.
 Ignore characters that are not alphabetic.

 steps
 1. convert string to array of characters
 2. check each character to see if it is uppercase or not
 3. if a lowercase character is found break and return false
 4. return true otherwise


*/

function isUppercase(str) {
  return str.split("").every(char => char === char.toUpperCase());
}


// test cases
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true