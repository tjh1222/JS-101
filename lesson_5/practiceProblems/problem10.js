/*
Perform the same transformation of sorting the subarrays
 we did in the previous exercise with one difference; sort
  the elements in descending order.
 */

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArray = arr.map((subArr) => {
  if ( typeof subArr[0] === 'number') {
    return subArr.slice().sort((a,b) => b - a);
  } else {
    return subArr.slice().sort(compareFunction);
  }
});

function compareFunction(stringA, stringB) {
  let arrayA = stringA.split("");
  let arrayB = stringB.split("");
  while (true) {
    if (arrayA[0] === undefined) return 1;
    if (arrayB[0] === undefined) return -1;

    if (arrayA[0] > arrayB[0]) {
      return -1;
    } else if (arrayA[0] < arrayB[0]) {
      return 1;
    }
    arrayA.shift();
    arrayB.shift();

  }
}


console.log(newArray);