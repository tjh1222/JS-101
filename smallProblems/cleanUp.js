/*
  Given a string that consists of some words
  and an assortment of non-alphabetic characters,
  write a function that returns that string with
   all of the non-alphabetic characters replaced
  by spaces. If one or more non-alphabetic characters occur in a row,
   you should only have one space in the result
   (i.e., the result string should never have consecutive spaces).
*/

// need a reg expr that replaces all instances of non-alphanumerics with space

function replaceAllNonAlphaNumerics(str) {
  const regex = /[^A-Za-z\s]/g;
  return str.replace(regex, " ");
}

// need a clean up function that replaces consecutive spaces with only one space


function cleanUp(str) {
  str = replaceAllNonAlphaNumerics(str);
  const regex = /\s+/gi;
  return str.replace(regex, " ");
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "


