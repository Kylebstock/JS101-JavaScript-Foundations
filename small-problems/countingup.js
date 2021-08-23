//Write a function that takes an integer argument and returns an array 
//containing all integers between 1 and the argument (inclusive), in ascending order.
//You may assume that the argument will always be a positive integer.

/*
problem:
example:
datastructure:
algorithm:
  -function sequence(number) 
    -create an empty array to store the values; newArray = [];
    -use a for loop to itterate backwords from the number
      -push the number minus - 1 into the new array
code:
*/

/*
function sequence(number) {
  let newArray = [];

  for (let index = 1; index <= number; index++) {
    newArray.push(index);
  }
  return newArray;
}
*/

function sequence(number) {
  let index = 1;
  let newArray = [];

  while (index <= number) {
    newArray.push(index);
    index ++;
  }
  return newArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
