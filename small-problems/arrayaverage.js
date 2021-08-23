//Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, 
//rounded down to the integer component of the average. The array will never be empty, 
//and the numbers will always be positive integers.
/*
problem:
examples:
data structure:
  input: array of integers
  output: single integer
algorithm:
  -create empty variable to store the final total
  -iterate over each element in the array, add the current value to the total variable
  -take the final total and divide the array length
code:
*/


//with for loop
let average = (array) => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
    //total += array[i];
  }
  return Math.floor(total / array.length);
};

//with forEach method
let average = (array) => {
  let total = 0;
  array.forEach(val => total += (val / array.length));
  return Math.floor(total);
};

//with reduce
let average = (array) => {
  return Math.floor(array.reduce((acc, cur) => acc += cur) / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40