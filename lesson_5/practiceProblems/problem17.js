/*
Each UUID consists of 32 hexadecimal characters
(the digits 0-9 and the letters a-f) represented as a string.
 The value is typically broken into 5 sections in an 8-4-4-4-12 pattern,
  e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no parameters and returns a UUID.
*/

const HEX_REFERENCE = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7:'7',
  8:'8',
  9:'9',
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f'
};
console.log(HEX_REFERENCE);

//8-4-4-4-12 pattern

const createUUID = () => {
  let uuid = [];
  //create 8 pattern
  uuid.push(createRandomHex(8));

  //create 4 patten 4 times
  for (let idx = 0; idx < 4; idx += 1) {
    uuid.push(createRandomHex(4));
  }
  //create 12 battern
  uuid.push(createRandomHex(12));
  return uuid.join('-');
};

function createRandomHex(size) {
  let result = "";
  for (let idx = 0; idx < size; idx += 1) {
    let random = Math.floor(Math.random() * Math.floor(16));
    result += HEX_REFERENCE[random];
  }
  return result;
}

console.log(createUUID());