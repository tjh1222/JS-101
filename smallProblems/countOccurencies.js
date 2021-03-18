const countOccurrences = (items) => {
  let itemCount = {};
  items.forEach((item) => {
    if (itemCount.hasOwnProperty(item)) {
      itemCount[item] += 1;
    } else {
      itemCount[item] = 1;
    }
  });
  displayOccurrences(itemCount);

};

function displayOccurrences (obj) {
  for (let key in obj) {
    console.log(`${key} => ${obj[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2