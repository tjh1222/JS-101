const MINUTES_IN_HOUR = 60;

//function that gets hours
function extractHours(minutesAfterMidNight) {
  Math.abs(minutesAfterMidNight);
  let hourCounter = 0;
  while (minutesAfterMidNight > MINUTES_IN_HOUR) {
    hourCounter += 1;
    minutesAfterMidNight -= MINUTES_IN_HOUR;
  }
  return hourCounter;

}

function extractMinutes(minutesAfterMidNight) {
  Math.abs(minutesAfterMidNight);
  let minuteCounter = 0;
  while (minutesAfterMidNight > 0) {
    minuteCounter += 1;
    minutesAfterMidNight -= 1;
  }
  return minuteCounter;
}

function timeOfDay(minutesAfterMidNight) {
  hours = extractHours(minutesAfterMidNight);
  minutes = extractMinutes(Math.abs(minutesAfterMidNight) - (hours * MINUTES_IN_HOUR));
  if (minutesAfterMidNight < 0) {
    return `${(24 - hours)}:${}`
  }
  

}


//function that returns minutes



// test cases

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");