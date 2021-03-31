/*
Given the following data structure, return a new array with
the same structure, but with the subarrays ordered -- alphabetically
 or numerically as appropriate -- in ascending order.
 */

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArray = arr.map((subArr) => {
  if ( typeof subArr[0] === 'number') {
    return subArr.slice().sort((a,b) => a - b);
  } else {
    return subArr.slice().sort();
  }
});


console.log(newArray);