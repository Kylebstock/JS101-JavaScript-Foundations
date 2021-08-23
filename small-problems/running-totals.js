let runningTotal = array => {
  let newArray = [];
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    newArray.push((sum += array[index]));
  }
  //return newArray;
  console.log(newArray);
};

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []