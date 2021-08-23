//Write a function that takes an array as an argument and returns an array that contains two elements,
//each of which is an array. Put the first half of the original array elements in the first element of the return value,
//and put the second half in the second element. If the original array contains an odd number of elements, 
//place the middle element in the first half array.

//problem: devide an array in half, into two arrays, if the original array ois odd, the middle element goes into the first array
//examples: [1,2,3,4] = [1,2] [3,4]
//data structure:
  //input: one array
  //output: two arrays
//algorithm:
  //seperate array into half
  //if array is odd, move odd element to first array
//code:

let halvsies = array => {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  console.log([firstHalf, secondHalf]);
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]