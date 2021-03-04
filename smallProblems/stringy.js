const stringy = (length) => {
  let stringyString = "0".repeat(length);
  stringyString = stringyString.split("").map((num, index) => {
    if (index % 2 === 0) {
      return '1';
    }
    return num;
  }).join("");
  return stringyString;
};
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
console.log(stringy(1));