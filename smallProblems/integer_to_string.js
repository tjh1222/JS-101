function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let numString = "";

  while (num >= 0) {
    numString += DIGITS[num % 10];
    num = Math.floor(num / 10);
    if (num === 0) {
      break;
    }
  }
  return numString.split("").reverse().join("");
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

function signedIntegerToString(num) {
  if (num === 0) return "0";
  return (num < 0) ? "-" + integerToString(num * -1) : "+" + integerToString(num);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");