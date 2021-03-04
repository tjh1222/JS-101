
function stringToSignedInteger(stringOfNums) {

  let arrayOfNums = stringOfNums.split("");
  let isNegative = false;

  if (arrayOfNums[0] === '-') {
    arrayOfNums.shift();
    isNegative = true;
  } else if (arrayOfNums[0] === '+') {
    arrayOfNums.shift();
  }


  let reverseArray = arrayOfNums.reverse();

  let num = 0;
  for (let index = 0; index < reverseArray.length; index++) {
    num += reverseArray[index] * Math.pow(10, index);
  }
  return (isNegative) ? num * -1 : num;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

