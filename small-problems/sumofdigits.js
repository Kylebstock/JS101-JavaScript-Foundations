function sum(digit) {
  return digit.toString().split("").reduce((accum, currentValue) => accum + Number(currentValue), 0);
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45