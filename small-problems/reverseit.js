//Write a function that takes a string argument and returns a new string containing 
//the words from the string argument in reverse order.

/*
problem:
  -Write a function that takes a string argument and returns a new string containing
    the words from the string argument in reverse order.
example/testcases:
  -see below
  -empty strings return empty strings
  -reverse the words, not the letters
  -caps dont matter
  -characters dont matter
data structures:
  -input = string
  -output = string
algorithm:
  -function with one argument for the string input
  -convert the function into an array using split method
  -reverse the array using reverse method
  -join the array suing join method and return the string
code:
*/

/*
let reverseSentence = (string) => {
   return string.split(" ").reverse().join(" ");
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
*/

/*
problem:
  -Write a function that takes a string argument containing one or more words 
    and returns a new string containing the words from the string argument. 
    All five-or-more letter words should have their letters in reverse order. 
    The string argument will consist of only letters and spaces. 
    Words will be separated by a single space.
Example:
  -see below
Data:
  -input string
  -output string
Algorithm:
  -function with one input for the string
  -string.split to turn into an array
  -make a for loop
    -if the string.length at the loops index is > 5 then return index.reverse
*/

/*
let reverseWords = (string) => {
  let newString = string.split(" ");
  let finalString = [];

  for (let index = 0; index < newString.length; index++) {
    if (newString[index].length >= 5) {
      finalString.push(newString[index].split("").reverse().join(""));
    } else {
      finalString.push(newString[index]);
    }
  }
  return finalString.join(" ");

}
*/

/*
let reverseWords = (string) => {
  let newString = string.split(" ");
  let finalString = [];

  newString.map(char => {
    if (char.split("").length >= 5) {
      finalString.push(char.split("").reverse().join(""));
    } else {
      finalString.push(char);
    }
  })
  return finalString.join(" ");
}
*/

let reverseWords = (string) => {
  return string.split(" ").map(char => (char.length > 4 ? char.split("").reverse().join("") : char)).join(" ");
}
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"