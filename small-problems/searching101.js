//Write a program that solicits six numbers from the user 
///and logs a message that describes whether the sixth number 
//appears among the first five numbers.

const readline = require('readline-sync');

let numberArray = [Number(readline.question(`Enter the 1st number:\n`)), 
                 Number(readline.question(`Enter the 2nd number:\n`)),
                 Number(readline.question(`Enter the 3rd number:\n`)), 
                 Number(readline.question(`Enter the 4th number:\n`)), 
                 Number(readline.question(`Enter the 5th number:\n`))];
/*
let firstNumber = readline.question(`Enter the 1st number:\n`);
let secondNumber = readline.question(`Enter the 2nd number:\n`);
let thirdNumber = readline.question(`Enter the 3rd number:\n`);
let fourthNumber = readline.question(`Enter the 4th number:\n`);
let fifthNumber = readline.question(`Enter the 5th number:\n`);
*/
let sixthNumber = readline.question(`Enter the 6th number:\n`);

  /*
  let numberArray = [];
  numberArray.push(firstNumber);
  numberArray.push(secondNumber);
  numberArray.push(thirdNumber);
  numberArray.push(fourthNumber);
  numberArray.push(fifthNumber);
  */
  
  if (numberArray.includes(sixthNumber)) {
    console.log(`The number ${sixthNumber} appears in ${numberArray.join(", ")}`);
  } else {
    console.log(`The number ${sixthNumber} does not appear in ${numberArray.join(", ")}`);
  }
