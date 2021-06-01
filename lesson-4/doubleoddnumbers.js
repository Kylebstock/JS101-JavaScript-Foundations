let doubleOddNumbers = numbers => {
  let doubledNumbers = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];
    let currentIndex = counter;

    if (currentIndex % 2 === 1) {
      doubledNumbers.push(currentNumber * 2);
    } else {
      doubledNumbers.push(currentNumber);
    };
  }
  return doubledNumbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]