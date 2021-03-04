const readline = require('readline-sync');

function greetUser() {
  let name = readline.question('What is your name?');
  let yelling = name.split("").includes("!");
  console.log((yelling) ?
    `Hello ${name.slice(0, -1)}. Why are we screaming?`.toUpperCase() : `Hello ${name}.`);
}

greetUser();