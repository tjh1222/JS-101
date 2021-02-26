const asciiValue = (str) => {
  return str.split("").reduce((acc, char) => {
    return acc + char.charCodeAt();
  }, 0);
};

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');