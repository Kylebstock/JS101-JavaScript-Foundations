//Write a function that takes one argument, a positive integer, 
//and returns a string of alternating '1's and '0's, 
//always starting with a '1'. The length of the string should match the given integer.

let stringy = integer => {
  let result = "";
  if (integer < 0 ) {
    console.log(`Please use a positive integer.`);
  }
  for (let counter = 0; counter < integer; counter ++) {
    let number = ((counter % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
}
console.log(stringy(0));
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(-1));
