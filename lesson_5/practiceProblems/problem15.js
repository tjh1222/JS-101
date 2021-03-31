/*
Given the following data structure, write some code to
 return an array which contains only the objects where
  all the numbers are even.
*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
  {a: [4, 6], b: [6, 8, 10, 12]}
];

let allEven = arr.filter(obj => {
  let combined = Object.values(obj).reduce((accum, num) => {
    return accum.concat(num);
  }, []);
  return combined.every(num => num % 2 === 0);
});
console.log(allEven);