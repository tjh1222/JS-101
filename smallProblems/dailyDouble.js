function crunch(str) {
  let crunchedString = "";
  for (let index = 0; index < str.length; index++) {
    if (crunchedString[crunchedString.length - 1] !== str[index]) {
      crunchedString += str[index];
    }
  }
  console.log(crunchedString);
}


crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""