let multiply = (numbersList, multiplyBy) => {
  let newMultiplyList = [];

  for (let counter = 0; counter < numbersList.length; counter += 1) {
    let currentNumber = numbersList[counter];
    newMultiplyList.push(currentNumber * multiplyBy);
  }
  return newMultiplyList;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]
console.log(myNumbers);