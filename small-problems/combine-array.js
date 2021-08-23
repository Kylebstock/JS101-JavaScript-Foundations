//Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two.
//There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. 
//You may assume that both arguments will always be arrays.
//input: multiple arrays
//output: one combines array

let union = (array1, array2) => {
  let workingArray = array1.concat(array2);
  let joinedArray = [];
  
  for (let i = 0; i < workingArray.length; i++) {
    if (!(joinedArray.includes(workingArray[i]))) {
      joinedArray.push(workingArray[i]);
    }
  }
  return joinedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]