const multiSum = (num) => {
  let sum = 0;
  for (let index = 0; index <= num; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  console.log(sum);

};

multiSum(20);
multiSum(3);       // 3
multiSum(5);       // 8
multiSum(10);      // 33
multiSum(1000);    // 234168