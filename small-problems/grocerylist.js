/*
problem
example/testcase
data structure
algorithm
-function with one argument
-create an empty array
-loop through argument array
  - each iteration loop through the inner array
  -number will equal the index for loop
    -each loop push the the zero index into new array
code
*/

function buyFruit(grocery) {
  let gorceryList = [];
  grocery.map(char => {
    for (let index = 0; index < char[1]; index++) {
      gorceryList.push(char[0]);
    }
  })
  return gorceryList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]