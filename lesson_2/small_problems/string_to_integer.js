function stringToInteger(stringOfNums) {
  let reverseString = stringOfNums.split("").reverse();
  let num = 0;
  for (let index = 0; index < stringOfNums.length; index++) {
    num += reverseString[index] * Math.pow(10, index);
  }
  return num;
}


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true