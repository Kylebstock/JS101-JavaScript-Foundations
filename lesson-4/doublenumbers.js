let doubleNumbers = numbers => {
  let doubleNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNumber = numbers[counter];
    doubleNums.push(currentNumber * 2);

    counter += 1;
  }
  return doubleNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]