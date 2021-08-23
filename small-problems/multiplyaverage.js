//Write a function that takes an array of integers as input, multiplies all of the integers together, 
//divides the result by the number of entries in the array,
//and returns the result as a string with the value rounded to three decimal places.

/*
problem: take in an array on integers, multiplies them all together, and then divide them byt the number of integers
example: [3, 5] = (3 * 5) / 2
  -assume integers as imputs
  -assume data is an array
  -assume no empty index
data structure:
 input: array
 output: string
algorithm:
  -create a running total variable to store answer
    -running total should start with first index of array;
  -loop through array and take current index multiplied by running total
    -skip first index in array as it will start the running total
code:
*/

let multiplicativeAverage = (array) => {
  let runningTotal = array[0];
  for (let index = 1; index < array.length; index++) {
    runningTotal = runningTotal * array[index];
  }
  return (runningTotal / array.length).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"