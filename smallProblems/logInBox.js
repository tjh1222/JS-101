function logInBox(str) {
  TopOrBottomBorder(str.length);
  emptyLine(str.length);
  messageLine(str);
  emptyLine(str.length);
  TopOrBottomBorder(str.length);
}

function TopOrBottomBorder(length) {
  let newStr = "+-";
  for (let index = 0; index < length; index++) {
    newStr += '-';
  }
  newStr += '-+';
  console.log(newStr);
}

function emptyLine (length) {
  let newStr = '| ';
  for (let index = 0; index < length; index++) {
    newStr += ' ';
  }
  newStr += ' |';
  console.log(newStr);
}

function messageLine(message) {
  let newStr = '| ';
  newStr += message;
  newStr += ' |';
  console.log(newStr);
}

logInBox('To boldly go where no one has gone before.');
logInBox('I love Emma and she is really really hawtt.Fire emoji. And she will retire early');