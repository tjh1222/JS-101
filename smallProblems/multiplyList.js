/*
  Write a function that takes two array arguments,
  each containing a list of numbers, and returns a new array
  that contains the product of each pair of numbers from the arguments
  that have the same index. You may assume that the arguments contain
  the same number of elements.


  Problem:

  Explicit requirements:
  1. multiply the first element of the input array with the 1st of the second.
  2. add the result of step 1 to an array
  3. repeat for the length of the input array.
  4. the lengths of the input array can be assumed to be the same length

  implicit requirements:
  1. the arguments passed to the function are arrays.

  Algorithm:
   1. initialize empty array called productArray.
   1. multiply the first element of the input array
      with the 1st el of the second.
  2. add the result of step 1 to an array
  3. repeat for the length of the input array.
  4. return product Array
*/

function multiplyList(array1, array2) {
  return array1.map((ele, idx) => ele * array2[idx]);

}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]