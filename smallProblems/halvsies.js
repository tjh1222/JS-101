/*


Problem

  Write a function that takes an array as an argument,
  and returns an array that contains two elements, each
  of which is an array. Put the first half of the original array
  elements in the first element of the return value, and put the
  second half in the second element. If the original array contains
  an odd number of elements, place the middle element in the first half array.

  Understand the problem:

  Questions:
    1. Can I assume the input will always be an array.


  input: array
  output: a nested Array

  Explicit Requirements:
  1. Take input array and split it in half
  2. return array with 2 elements in it
  3. 1st element is an array with the first half of the input array
  4. 2nd element is an array with the second of the input array
  5. if the input array is odd. The middle element goes in the first subarray

  Implicit Requirements:
  1. if the input array is empty return []

Examples

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

Datastructures:

nested array


Algorithm

High Level Implementation:

1. initialize empty array called result
2. Take input array
3. Extract 1st half of array
4. push to result array
5. extract 2nd half of array
6. push to result array
7. return result


*Implementation Details for extracting first/second half of array
1. determine if its odd or even in length
2. calculate midpoint index
3. if Even:
  3.1. length of array / 2 - 1 is the midpoint index
  if Odd:
  3.2. length of array / 2 is the midpoint index
4. first half is the elements from index 0 -> midpoint Index;
5. second half is the elemnts from midpoint Index + 1 - > end


Code


*/


function halvsies(array) {
  if (array.length === 0) return [[],[]];

  let midPointIndex = Math.ceil(array.length / 2);
  return [array.slice(0, midPointIndex), array.slice(midPointIndex)];
}


//test cases

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]