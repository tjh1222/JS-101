/*
Given the following data structure, use a combination of methods,
 including filter, to return a new array identical in structure to
 the original, but containing only the numbers that are multiples of 3.
*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let mulitplesOfThree = arr.map((subArr) => {
  return subArr.filter(el => el % 3 === 0);
});
console.log(mulitplesOfThree);
console.log(arr);