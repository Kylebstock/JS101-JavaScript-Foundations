//Write a function that takes a string argument consisting of a first name, a space, and a last name, 
//and returns a new string consisting of the last name, a comma, a space, and the first name.

/*
problem:
example:
data:
algorithm:
  -function taht takes in a string
    -string.split(" ") to convert string into an array
  -create new variable to join the array
    -array[1] first with camma then array [0]
  -return new variable
code:
*/

/*
function swapName(string) {
  let stringArray = string.split(" ");
  let nameSwap = stringArray[1] + ", " + stringArray[0];
  return nameSwap;
}
*/

/*
function swapName(string) {
  return string.split(" ").reverse().join(", ");
}
*/

function swapName(name) {
  let nameArray = name.split(" ");
  return `${nameArray.pop()}, ${nameArray.join(" ")}`;
}

console.log(swapName('Joe Michael Henry Roberts'));    // "Roberts, Joe"
