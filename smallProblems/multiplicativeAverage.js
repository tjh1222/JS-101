/*

Problem: Mulitply all the elements in an array together.
Divide the result by the number of the elements. Return the result
as a string to 3 decimal places.

input {Array}
output {String}


Explicit Requirements:
1. multiply elements together
2. Divide by the length of the array
2. round result to three decimals

Implicit Requirements:
1. if there is a zero in the list the result will be zero.

Examples:

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

Algorithm:

1. Initilize a variable called total to 1.
2. Multiply the first element by the total.
3. reassign the total to the product found in step 2
4. Repeat for the rest of the input array.
5. Divide by the number of elements in the array


*/

function multiplicativeAverage(arr) {
  let product = arr.reduce((accum, ele) => {
    return ele * accum;
  }, 1);
  return (product / arr.length).toFixed(3);

}


console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
console.log(multiplicativeAverage([2, 5, 0, 3, 5]));
