function isLeapYear(year) {
  if (year > 1752) {
    return gregorianCalendar(year);
  } else if (year < 1752) {
    return julianCalendar(year);
  } else {
    return true;
  }
}

function gregorianCalendar(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }

  return false;
}

function julianCalendar(year) {
  return (year % 4 === 0);
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true