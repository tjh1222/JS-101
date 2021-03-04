const penultimate = (str) => str.split(" ").reverse()[1];

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
