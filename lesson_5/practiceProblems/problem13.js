/*
Given the following data structure, sort the array so that
the sub-arrays are ordered based on the sum of the odd numbers
that they contain.
*/

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];


function sumArr(arr) {
  let sum = arr.reduce((accum, el) => {
    if (el % 2 !== 0) {
      return accum + el;
    } else {
      return accum;
    }
  }, 0);
  return sum;
}
arr.sort((a, b) => {
  return sumArr(a) - sumArr(b);
});
console.log(arr);
