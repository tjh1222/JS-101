
/* Write a function that takes a positive integer, n, as an argument,
 and logs a right triangle whose sides each have n stars.
 The hypotenuse of the triangle (the diagonal side in the images below)
 should have one end at the lower-left of the triangle,
and the other end at the upper-right.

*/

//write a functon that takes in the string and amount of indentation required
//returns new string

function indentString(numOfIndents, str) {
  return " ".repeat(numOfIndents) + str;
}

//triangle function
function triangle (sideLength) {
  for (let idx = 1; idx <= sideLength; idx++) {
    console.log(indentString(sideLength - idx, "*".repeat(idx)));
  }
}


triangle(5);
triangle(9);