/*
  Write a function that takes two arrays as arguments,
  and returns an array containing the union of the values
  from the two. There should be no duplication of values
  in the returned array, even if there are duplicates in
  the original arrays. You may assume that both arguments will always be arrays.

 P: Understand The Problem
  Inputs: indefinite number of arrays
  Outputs: a new array
Questions:
  1. Can the input arrays contain sub arrays?

explicit requirements:
1. Need to combine the values from all arrays into a single array.
2. There should be no duplicates in the final array
3. the input arrays can have duplicates
4. we can assume the input is an array

implicit requirements:
  1. treats all primitives and objects equally when merging the two lists.
    Objects/arrays will be added as long as an identical array/object doesn't
    exist.

 E: Examples and Test Cases
  union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

 D: Datastructures:
  1. an array

    [1, 3, 4]
    [3, 4, 5, 6]

   ---> [1, 3, 4, 5, 6]

    [1]
    [2, [3, 2]]

  ----> [1, 2, [3, 2],


 A: algorithms:
  High Level Breakdown:
  1. initalize empty new array
  2. Add the unique values from the first input array to the new array
  3. Repeat step2 for the the rest of the input array

  *STEP1 IMPLEMENTATION DETAILS*
  1. initialize empty array with a name of unionArray

  *STEP2-3 IMPLEMENTATION DETAILS*
  1. intialize counter variable
  2. look at the current value of the input array at location counter
  3. Check if it's already in the array
  4. if no: add if yes: don't add to the array
  5. increment counter by 1
  6. Repeat 2-5 until counter < arraylength - 1
  7. Repeat for the rest of the input array

 C: Code:

*/
function addUniqueItems(result, arr) {
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
}

function union(...arrays) {
  let unionArray = [];
  for (let idx = 0; idx < arrays.length; idx++) {
    addUniqueItems(unionArray, arrays[idx]);
  }
  return unionArray;

}

//test cases
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 3, 6], [0, 3, 5])); // [1, 3, 6, 0, 5]
console.log(union([1, 3, 3, 6], [0, [3, 5]])); // [ 1, 3, 6, 0, [ 3, 5 ] ]
console.log(union([], [])); // []
console.log(union([1, 2, 3], [2, 3, 4], [3, 4, 2, 1])); // [1, 2, 3, 4]

