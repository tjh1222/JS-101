/*
Given the following data structure, use the map method to return a
new array identical
 in structure to the original but, with each number incremented
 by 1. Do not modify the
original data structure.

*/

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let incrementedArray = arr.map((obj) => {
  let objCopy = Object.assign({}, obj);
  for (let key in objCopy) {
    objCopy[key] += 1;
  }
  return objCopy;
});
console.log(incrementedArray);
console.log(arr);