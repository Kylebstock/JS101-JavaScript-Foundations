const readline = require('readline-sync');

let invalidNumber = num => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};

const computeSum = (targetNumber) => {
  let total = 0;
  for (let num = 1; num <= targetNumber; num ++) {
    total += num;
  }
  return total;
}

const computeProduct = (targetNumber) => {
  let total = 1;
  for (let num = 1; num <= targetNumber; num ++) {
    total *= num;
  }
  return total;
}

let integer = readline.question(`Please enter an integer greater than 0:\n`);

while (invalidNumber(integer)) {
  console.log(`Hmm... that doesn't appear to be a valid number.`);
  integer = readline.question();
}

let choice = readline.question(`Enter "s" to compute the sum, or "p" to compute the product.\n`);

while (!['s', 'p'].includes(choice)) {
  console.log(`Please choose "s" to compute the sum, or "p" to compute the product`);
  choice = readline.question();
}

if (choice === "s") {
  let sum = computeSum(integer);
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (choice === "p") {
  let product = computeProduct(integer);
  console.log(
    `The product of the integers between 1 and ${integer} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}