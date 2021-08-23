//Write a function that takes two array arguments, each containing a list of numbers, 
//and returns a new array that contains the product of each pair of numbers from the arguments that have the same index.
//You may assume that the arguments contain the same number of elements.

/*
problem: take in two arrays of integers, multiply the paring index of each integer and return them into one array
example: see below
  -assume all imputs are integers
  -assume arrays are the same length
  -assume no empty index
data Structure: arrays
  input: two arrays of integers
  output: 1 array of integers
algorithm:
  -empty array to store new array values
  -create a count varable
  -iderate through first array and multiply index integer by count value of second array
  -increase count varable by one
  -repeat
code:
*/

let multiplyList = (array1, array2) => {
  let newArray = [];
  array1.forEach(element => {
    newArray.push(element * array2.findIndex(element));
  })
  return newArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]