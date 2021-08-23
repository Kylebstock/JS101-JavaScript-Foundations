/*
Algorithm:
  -create a function with one input for string
  -create an empty array to push result into
  -loop through the string
    -create a variable that will equal the index at each itteration
    -if the variable is equal toLowerCase
      -then push variable will equal toUpperCase
    -if the variable is equal toUpperCase
      -then push the variable will equal toLowerCase
    -else
      -push the variable into empty array
  return the array.join
*/

let swapCase = (string) => {
  let newArray = [];

  for (let index = 0; index < string.length; index++) {
    let character = string[index];
    if ((character >= 'a') && (character <= 'z')) {
      newArray.push(character.toUpperCase());
    } else if ((character >= 'A') && (character <= 'Z')) {
      newArray.push(character.toLowerCase());
    } else {
      newArray.push(character);
    }
  }
  return newArray.join("");
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"