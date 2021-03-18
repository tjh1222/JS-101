/*
Write a function that takes a year as input and returns the century.
 The return value should be a string that begins with the century number,
  and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
*/

function isNumInTeens(num) {
  num = Number(String(num.slice(-2)));
  return (num > 10 && num < 20);
}

function getSuffix (num) {
  let numStr = String(num);
  if (isNumInTeens(numStr)) return 'th';

  switch (numStr.slice(-1)) {
    case ('1'): return "st";
    case ('2'): return "nd";
    case ('3'): return "rd";
    default: return "th";
  }
}

function century(year) {
  let century = Math.ceil(year / 100);
  return String(century) + getSuffix(century);
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"