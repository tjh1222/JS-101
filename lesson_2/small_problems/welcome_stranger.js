function greetings(name, careerDetails) {
  return `Hello, ${name.join(" ")}! Nice to have a ${careerDetails.title} ${
    careerDetails.occupation} around.`;
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));