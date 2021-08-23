//Write a function that takes a non-empty string argument and returns the middle character(s) of the string. 
//If the string has an odd length, you should return exactly one character. 
//If the string has an even length, you should return exactly two characters.

/*
Problem:
  -input: string
  -output: string
  -return the middle of a string.
Example/Testcase:
  -string will not be empty
  -if string is odd length then return one caracter
  -if tring is even then return the middle two characters
  -count spaces and non characters in length
  -character case doesnt matter
datastructures:
  -inputs will be strings
  -outputs need to be strings
algorithm:
  -function that takes in one paramiter for sting
  -if string.length % 2 === 0 is true
    -return string.slice starting right before middle and ending right after middle
    -else
      -return stirng.slice right before second middle and right after
code:
*/

let centerOf = (string) => {
  if (string.length % 2 === 0) {
    return string.slice((string.length / 2) - 1, (string.length / 2) + 1);
  } else {
    return string.slice((string.length - 1) / 2, (string.length + 1) / 2)
  }
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"