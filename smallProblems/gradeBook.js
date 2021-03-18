/*
Write a function that determines the mean (average) of the three scores
passed to it, and returns the letter associated with that grade.
*/

//function that returns averge

const average = (num1, num2, num3) => {
  return (num1 + num2 + num3) / 3;
};

function getLetter(average) {
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function getGrade(num1, num2, num3) {
  let numericGrade = average(num1, num2, num3);
  return getLetter(numericGrade);

}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"