let isMultiple = (number, divisor) => {
  return number % divisor === 0;
}

let multisum = (maxValue) => {
  let sum = 0;
  for (let number = 1; number <= maxValue; number ++) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168