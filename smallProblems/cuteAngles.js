/*
  Write a function that takes a floating point number representing
  an angle between 0 and 360 degrees, and returns a string representing
  that angle in degrees, minutes, and seconds. You should use a
  degree symbol (˚) to represent degrees,
  a single quote (') to represent minutes,
  and a double quote (") to represent seconds.
  There are 60 minutes in a degree, and
  60 seconds in a minute.

 */

// 60min/ degree 60 seconds/ minute

// .73 degrees * 60 = 43.8
// .8 minutes * 60 = 48


const DEGREES_TO_MINUTES = 60;
const MINUTES_TO_SECONDS = 60;

//conversion functions

// degrees -> minutes
function degreesToMinutes(deg) {
  return deg * DEGREES_TO_MINUTES;
}

// minutes -> seconds
function minutesToSeconds(minutes) {
  return minutes * MINUTES_TO_SECONDS;
}

//extract whole number
function extractWholeNumPart(num) {
  return Number(String(num).split('.')[0]);
}

function formatForString(formattedStrings) {
  for (let idx = 1; idx < formattedStrings.length; idx++) {
    if (formattedStrings[idx].length === 1) {
      formattedStrings[idx] = "0" + formattedStrings[idx];
    }
  }
  return formattedStrings;

}

//construct message

function getString(degrees, minutes, seconds) {
  [degrees, minutes, seconds] = formatForString([degrees, minutes, seconds]);
  return `${degrees}\u00B0${minutes}'${seconds}"`;
}

function dms(num) {
  let degrees = Math.floor(num);
  let minutes = 0;
  let seconds = 0;

  let remainder = num - degrees;
  if (remainder !== 0) {
    minutes = Math.floor(degreesToMinutes(remainder));
    remainder = degreesToMinutes(remainder) - minutes;
  }

  if (remainder !== 0) {
    seconds = extractWholeNumPart(minutesToSeconds(remainder));
  }
  return getString(String(degrees), String(minutes), String(seconds));
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"