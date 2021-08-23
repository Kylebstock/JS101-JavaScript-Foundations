//Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.
/*
problem: function needs to take in one argument, positive integers, and turn it into an array of integers (not strings).
example: see below
  -assume only one argument
  -assume integers are posative
  -assume there will always be an argument inputed
  -assume no non numaric values, e.g., periods or commas, etc
data structure:
  -input: integers
  -output: array
algorithm:
  -function take in one argument of integers
  -create a varable to save the split the integers into an array, then to string first
  -create a variable for an empty array to store converted string/integers
  -loop through the new array to convert the string numbers back into integers
  -push into variable with empty array
  -return the variable with the new array
code:
*/

/*
function digitList(list) {
  let newList = String(list).split("");
  let newArray = [];

  for (let i = 0; i < newList.length; i++) {
    newArray.push(parseInt(newList[i], 10));
  }
  
return newArray;
};
*/

function digitList(list) {
  let newList = (String(list).split("")).map(val => parseInt(val, 10));

  return newList;

  //return newList.map(val => parseInt(val, 10));
};


console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]