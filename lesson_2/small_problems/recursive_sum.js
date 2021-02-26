
function recursiveSum (arr) {
  return (arr.length === 1) ? arr[0] : arr[0] + recursiveSum(arr.slice(1));
}
console.log(recursiveSum([1, 2, 3, 4]));