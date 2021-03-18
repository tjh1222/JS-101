/*

  Write a function that takes two sorted arrays as arguments,
  and returns a new array that contains all the elements from
  both input arrays in sorted order.
  You may not provide any solution that requires you to sort the
  result array. You must build the result array one
  element at a time in the proper order.
  Your solution should not mutate the input arrays.


  Understand the Problem:

  Input: {array1, array2}
  Output: {array} NEW not mutated
  Explicit Requirements:
  1. Merge the two input arrays
  2. keep them sorted
  3. You can't sort the final array
  4. You must build the result array one element at a time in the proper order

  Implicit Requirements:
  1. Should be able to handle empty arrays as input
  2. We can assume the input will always be sorted arrays

  Examples:
    merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
    merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
    merge([], [1, 4, 5]);             // [1, 4, 5]
    merge([1, 4, 5], []);             // [1, 4, 5]
    merge([], []);                    // []
    merge([1, 2, 3], [3, 4, 5])       // [1,2 ,3, 3, 4, 5]

  Datastructures: -> array will be used and built step by step. no mutation

  Algorithms:

    High Level Steps:

    1. Create new empty array called mergeSorted.
    2. Compare the first item in the 1st input array with the the
      first item in the 2nd input array.
    3. If the first array item is smaller add it to the mergedSorted array.
      if the second array item is smaller add it to the mergedSorted Array.
      if they are equal add them both.
    4. change only the index variables for the array that just pushed
        the next smallest number.
    5. Repeat until the length of the mergedSorted array is equal
        to the sum of the input arrays

    Different Idea:

    1. find the next smallest of each array
    2. compare them
    3. add the smaller to the list

    {
      1: #,
      2: #,
      3. #

    }

*/


function merge(array1, array2) {
  let idxOne = 0;
  let idxTwo = 0;
  let merged = [];
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  while (merged.length < array1.length + array2.length) {
    if ( array1[idxOne] <= array2[idxTwo] || array2[idxTwo] === undefined) {
      merged.push(array1[idxOne]);
      idxOne += 1;
    } else {
      merged.push(array2[idxTwo]);
      idxTwo += 1;
    }
  }
  return merged;

}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([], []));                    // []
console.log(merge([1, 2, 3], [3, 4, 5]));       // [1,2 ,3, 3, 4, 5]