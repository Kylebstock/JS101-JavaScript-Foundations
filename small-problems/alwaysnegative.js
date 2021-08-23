//Write a function that takes a number as an argument.
//If the argument is a positive number, return the negative of that number. 
//If the argument is a negative number, return it as-is.

/*
problem:
  -write a function that takes in a number and returns the negative. 
  -If the number is negative then it returns as is
example/test cases:
  -provided:
  -inputs will be numbers only
  -counts zero, needs to be returns as negative
datastructures:
  -
algorithm:
  -function that takes in one argument (number)
  -Use Math.sign to determine if number is posative or negative
    -if negative then return the number
    -if posative, then save number to new variable
      -return variable with unary negative operator (-)
code:
*/

/*
function negative(number) {
  if (number === 0) {
    return -number;
  } else if ((Math.sign(number) === -1) || (Math.sign(number) === -0)) {
    return number;
  } else {
    return -number;
  }
}
*/

function negative(number) {
  return Math.abs(number) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
console.log(negative(17));
console.log(negative(123));
console.log(negative(-99));