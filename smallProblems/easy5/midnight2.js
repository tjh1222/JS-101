/*
Write two functions that each take a time of day in 24 hour format, 
and return the number of minutes before and after midnight, respectively.
 Both functions should return a value in the range 0..1439.
*/
const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;


function afterMidnight(time) {
  let hours = parseInt(time.slice(0, 2), 10);
  let minutes = parseInt(time.slice(3), 10);
  let minutesAfterMidnight = ((hours * MINUTES_IN_HOUR) + minutes);
  return (minutesAfterMidnight !== MINUTES_IN_DAY) ? minutesAfterMidnight : 0;

}

function beforeMidnight (time) {
  let minutesBeforeMidnight = MINUTES_IN_DAY - afterMidnight(time);
  return (minutesBeforeMidnight !== MINUTES_IN_DAY) ? minutesBeforeMidnight : 0;
}

console.log(afterMidnight("00:00"))      //=== 0);
console.log(beforeMidnight("00:00")) //=== 0);
console.log(afterMidnight("12:34"))  //=== 754);
console.log(beforeMidnight("12:34")) //=== 686);
console.log(afterMidnight("24:00"))  //=== 0);
console.log(beforeMidnight("24:00")) //=== 0);