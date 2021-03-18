function fib(target) {
  let current = 1;
  let prev1 = 1;
  let prev2 = 1;
  for (let idx = 1; idx < target + 1; idx++) {
    if (idx > 2) {
      current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
    }
  }
  return current;
}

fib(4);
fib(7);
fib(8);
fib(10);