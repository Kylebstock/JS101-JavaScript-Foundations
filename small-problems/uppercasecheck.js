/*
problem:
  -Write a function that takes a string argument and returns true if all of the 
  -alphabetic characters inside the string are uppercase; false otherwise. 
  -Ignore characters that are not alphabetic.
Example:
  -see below
data:
  -input: string
  -output: boolean true/false
algorithm:
  -function with one argument for string
  -split the string into array
  -filter array for lower case
    -if character === toUpperCase(character) return true
      -else return false

*/

function isUppercase(string) {
  return string.toUpperCase() === string;
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true