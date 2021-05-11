/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/


const readline = require('readline-sync');

let bill = parseFloat(readline.question(`What is your bill?\n`));

let percent = parseFloat(readline.question(`What is your tip percent?\n`));

let tip = bill * (percent / 100);

let total = bill + tip;

console.log(`Your tip is $${tip}`);
console.log(`Your total bill is $${total}`);

/*

console.log(`What your bill?`);
let bill = readline.question();
bill = parseInt(bill, 10);

console.log(`What your desired tip percentage?`);
let tip = readline.question();
tip = parseInt(tip, 10);

let calculateTotal = () => {
  let calcTip = (bill * tip) /100;
  let calcTotal = calcTip + bill;
  console.log(`The tip is $${calcTip}`);
  console.log(`the total is $${calcTotal}`);
}

calculateTotal(bill, tip);

*/
