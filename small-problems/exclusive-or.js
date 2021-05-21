function xor (val1, val2){
  return !!val1 !== !!val2 ? true: false
}
/*
function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

let xor = (argument1, argument2) => {
  if ((argument1 && !argument2) || (argument2 && !argument1)) {
    return true;
  }
  return false;
}
*/

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);