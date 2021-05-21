let penultimate = (string) => {
  let newString = string.substring(string.length - 2, string.length - 1 );
  return newString;
};

console.log(penultimate("last word")); // logs "last"
console.log(penultimate("Launch School is great!")); // logs "is"
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true