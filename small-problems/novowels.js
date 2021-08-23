/*
problem:
  -Write a function that takes an array of strings and returns an array of the same string values, 
  -but with all vowels (a, e, i, o, u) removed.
Examples:
  -see below
Data structure:
  -input: array
  -output: array
Algorithm:
  -function with one argument
  -


*/

function removeVowels(array) {
  return array.map(arr => arr.replace(/[aeiou]/gi, ""));
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]