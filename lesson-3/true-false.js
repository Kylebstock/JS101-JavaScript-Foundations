const isColorValid = color => ['blue', 'green'].includes(color);
//const isColorValid = color => color === 'blue' || color === 'green';
/*
function isColorValid(color) {
  //return color === 'blue' || color === 'green';
  //return color === 'blue' || color === 'green' ? true : false;
  
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
*/

console.log(isColorValid('red'));
console.log(isColorValid('blue'));
console.log(isColorValid('black'));
console.log(isColorValid('green'));
