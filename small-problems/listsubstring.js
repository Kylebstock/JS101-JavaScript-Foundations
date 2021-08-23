/*
problem: 
  -Write a function that takes a string argument and returns a list of substrings of that string. 
  -Each substring should begin with the first letter of the word, 
  -and the list should be ordered from shortest to longest.
Example/Test Cases:
  -see below
  -alwyas string input
  -number of characters in string will be number of indexs in the array
  -ignore special characters
data structures:
  -input: string
  -output: array
  -save string data into array
  -create a new variable that saves the previsou indexes, add the new index and push.
  -create a new array with pushed data
algorithm:
  -function with one argument
  -create a working array with split
  -create an empty array to push into
  -use a for loop to itterate through the array
    -create a variable to save the value of index and incriment index with each iteration
    -push that variable into the new array at each iteration
  -return the new array
code:
*/

/*
function leadingSubstrings(string) {
  let newString = string.split("");
  let newArray = [];
  let character = ""; 

  for (let index = 0; index < newString.length; index ++) {
    character += newString[index];
    newArray.push(character);
  }
  return newArray;
}
*/

function leadingSubstrings(string) {
  let subString = [];
  for (let length = 1; length <= string.length; length++) {
    
    subString.push(string.slice(0,length));
  }
  return subString;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]