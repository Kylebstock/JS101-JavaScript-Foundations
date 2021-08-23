//Write a function that combines two arrays passed as arguments, and returns a new array 
//that contains all elements from both array arguments, with each element taken in alternation.
//You may assume that both input arrays are non-empty, and that they have the same number of elements.

/*
problem: take in two arrays and combine them into one array. but the values needs to be taken in alteration
example: see below; 
  - assume both arrays are same number of elements
  - assume arrays are non-empty
data: working with arrays
  input: 2 arrays
  output: 1 array
algorithm:
 - create an empty array to store values
 - loop through first array to get index, and push first value at index to empty array
 - use same index on second array and push first value to empty array
 - repeat

code:
*/


let interleave = (array1, array2) => {
  let newArray = [];

  for (index1 = 0; index1 < array1.length; index1++) {
    newArray.push(array1[index1], array2[index1]);
  }
  return newArray;
};

//using forEach()
let interleave = (array1, array2) => {
  let newArray = [];
  let count = 0;
  array1.forEach(element1 => {
    newArray.push(element1, array2[count]);
    count += 1;
  })
return newArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]