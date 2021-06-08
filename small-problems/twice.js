//function take in one argument
//evaluate if left side numbers are same as right side numbers 
  //function to turn numbers into string
  //Math.floor(string.length / 2) to get center
  //right side is slice 0, center
  //left side is slice center onwards
  //compare right side === to left side
//if true then leave as is
//if not, then double (times two) the provided number and return

let twice = number => {
  if (doubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

let doubleNumber = number => {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftSide = stringNumber.slice(0, center);
  let rightSide = stringNumber.slice(center);

  return leftSide === rightSide;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676