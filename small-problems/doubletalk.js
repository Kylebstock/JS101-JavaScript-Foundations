//Write a function that takes a string, doubles every character in the string, 
//and returns the result as a new string.
/*
problem:
  Input: single string
  output: single string
examples: see below
  -assume alway one string as input
  -return empty string if empty string is given
  -duplicate non character values as well, such as spaces and periods
  -assume no numaric values
data structure:
  working with strings
  working with loops
algorithm:
  initiate an empty variable to save the new string data into - array
  split the string into an array, split by characters ("").
  loop through the new array
    check if the iteration is a vowel, digit or white space
      if yes, continue
      if no, push the current index into the new array + another copy of the current index
  return the final array with the duplicates but joined together
code:
*/


let repeater = (string) => {
  let storedString = [];

  for (let i = 0; i < string.length; i++) {
    if (['a', 'e', 'i', 'o', 'y'].includes(string[i])) {
      continue;
    } else {
    storedString.push(string[i] + string[i]);
    }
  }
  return storedString.join("");
}


/*
let repeater = (string) => {
  return string.split("").map(char => char + char).join("");
}
*/


console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""