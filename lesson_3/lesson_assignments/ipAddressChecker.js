
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function validateIpAddressLength(array) {
  return (array.length === 4);
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (!validateIpAddressLength(dotSeparatedWords)) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('1.2.3.4.5'));
console.log(isDotSeparatedIpAddress('1.2.3'));
