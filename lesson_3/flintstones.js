let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);


let flattenedArray = flintstones.reduce((accum, item) => {
  return accum.concat(item);
},[]);

flintstones = [].concat(...flintstones);

console.log(flintstones);

console.log(flattenedArray);
//console.log(flintstones);c