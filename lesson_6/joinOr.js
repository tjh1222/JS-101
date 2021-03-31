/*
  [1, 2, 3] -> 1, 2, 3
  desired result: -> 1, 2, or 3

*/


function joinOr(array, delimeter = ', ', joiningWord = "or") {
  if (array.length <= 2) return array.join( " " + joiningWord + " ");

  array[array.length - 1] = joiningWord + " " + array[array.length - 1];
  return array.join(delimeter);
}


console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"