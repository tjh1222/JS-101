function sum (int) {
  if (int === 0) return 0;
  let nums = String(int).split("");
  return Number(nums[0]) + sum(Number(nums.slice(1).join("")));
}

console.log(sum(23));           // 5

console.log(sum(496));          // 19
console.log(sum(123456789));    // 45