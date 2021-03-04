function xor(a, b) {
  return (Boolean(a) !== Boolean(b));
}


console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));