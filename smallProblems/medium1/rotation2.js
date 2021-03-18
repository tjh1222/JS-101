/*

Write a function that rotates the last count digits of a number.
 To perform the rotation, move the first of the digits that you want 
 to rotate to the end and shift the remaining digits to the left.

 PSUEDOCODE:

 input: number
        indexToRotate
  1. Convert number -> a string
  2. convert the string to an array
  3. Grab the subarray starting from the indexToRotate to the end of the array.
  4. remove the first item in the subarray and append it to the end
  5. combine the original array up until (array - index) pos with the
     rotated subarray.
  6. convert the array to a string
  7. convert the string -> number
  8. return number

 */

function rotateRightmostDigits(number, indexToRotate) {
  let numArr = String(number).split("");
  let subArr = numArr.slice(-1 * indexToRotate);
  subArr = subArr.slice(1).concat(subArr[0]);
  numArr = numArr.slice(0, numArr.length - indexToRotate).concat(subArr);
  return Number(numArr.join(""));
}

//['1', '2', '3']
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917