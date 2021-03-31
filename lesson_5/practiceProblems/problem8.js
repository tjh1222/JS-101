/*
Using the forEach method, write some code to output all vowels
from the strings in the arrays. Don't use a for or while loop.

*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
let vowels = [];
Object.values(obj).forEach(subArr => {
  subArr.forEach(word => {
    vowels.push(word.split("").filter((letter) => {
      return (VOWELS.includes(letter));
    }).join(""));
  });
});
console.log(vowels.join(""));