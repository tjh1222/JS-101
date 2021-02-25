//imports readline-sync module
const readline = require('readline-sync');
//conversion factor between square meters -> square feet
const CONVERSION_FACTOR = 10.7639;
//define function that converts between square meters and square feet
const convert = squareMeters => (squareMeters * CONVERSION_FACTOR).toFixed(2);

//get dimensions of room
console.log('Enter the length of the room in meters');
let length = readline.prompt();
console.log('Enter the width of the room in meters');
let width = readline.prompt();
//calculate area to 2 decimal points
let area = (width * length).toFixed(2);


//display area
console.log(`The area of the room is ${area} square meters (${convert(area)} square feet).`);

