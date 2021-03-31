/*
Write a function that takes a time using this minute-based
 format and returns the time of day in 24 hour format (hh:mm).
 Your method should work with any integer input.
You may not use javascript's Date class methods.

Understanding the Problem:
1. Deal with input that exceeds a day.
2. handle negatives and positive input
3. the format needs to be "00:00"


PsuedoCode:
1. Take the input in minutes and make sure its less than a day
2. If it isn't less than a day. Convert to equivalent number that is.
3. If negative start the time at 24:00
4. if positive start the time at 00:00
5. Take the minutes and either add if positive or subtract if negative
6. Convert the minutes into hours and minutes.
7. format message to HH:MM format

*/

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;

function timeOfDay(minutes) {
  let isPositive = true;

  if (minutes < 0) {
    isPositive = false;
  }

  minutes = cleanInput(minutes);
  let hours = getHours(minutes);

  minutes -= hours * MINUTES_IN_HOUR;
  return whatTimeIsIt(hours, minutes, isPositive);

}

function whatTimeIsIt(hours, minutes, isPositive) {
  let hourReference = (isPositive) ? 0 : 23;
  let minuteReference = (isPositive) ? 0 : MINUTES_IN_HOUR;
  if (isPositive) {
    hours += hourReference;
    minutes += minuteReference;
  } else {
    hours = hourReference - hours;
    minutes = minuteReference - minutes;
  }
  [hours, minutes] = formatTime(hours, minutes);
  return `${hours}:${minutes}`;

}

function formatTime(hours, minutes) {
  hours = String(hours);
  minutes = String(minutes);
  if (hours.length !== 2) {
    hours = "0" + hours;
  }
  if (minutes.length !== 2) {
    minutes = "0" + minutes;
  }
  return [hours, minutes];
}

function getHours(minutes) {
  return Math.floor(minutes / 60);
}

function cleanInput(minutes) {
  return Math.abs(minutes % MINUTES_IN_DAY);
}

console.log(timeOfDay(0));           // === "00:00");
console.log(timeOfDay(-3));          //=== "23:57");
console.log(timeOfDay(35));          //=== "00:35");
console.log(timeOfDay(-1437));       //=== "00:03");
console.log(timeOfDay(3000));        //=== "02:00");
console.log(timeOfDay(800));         //=== "13:20");
console.log(timeOfDay(-4231));      //=== "01:29");