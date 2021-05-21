// ask the user for first number
// ask the user for second number
// ask for the operand to be performed
// perform calculation
// print results to console

const readline = require('readline-sync');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

let invalidNumber = num => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
};

prompt(`Welcome to Kyle's Amazingly Incredible Calculator!`);
let name = readline.question(`=> What shall I call you?\n`);
prompt(`Hello ${name}, It's nice to meet you!\n=> let's begin shall we!`);

while (true) {
  prompt(`Please select your first number:`);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(`Hmm... that doesn't appear to be a valid number.`);
    number1 = readline.question();
  }

  prompt(`Okay, now select your second number:`);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(`Hmm... that doesn't appear to be a valid number.`);
    number2 = readline.question();
  }

  prompt(`Okay, you selected ${number1} and ${number2}.`);

  let operation = readline.question(`=> Now, what operation should the Amazing Incredible Calculator perform?\n=> 1) Add 2) Subtract 3) Multiply 4) Divide\n`);

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(`Please choose 1, 2, 3 or 4`);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`Wow! That's gonna be tricky!\n=> Give me a second to analyze`);

  // eslint-disable-next-line no-inner-declarations
  function syncDelay(milliseconds) {
    let start = new Date().getTime();
    let end = 0;
    while ((end - start) < milliseconds) {
      end = new Date().getTime();
    }
  }

  syncDelay(1000);
  prompt(`...`);
  syncDelay(1000);
  prompt(`...`);
  syncDelay(1000);
  prompt(`...`);

  syncDelay(1000);

  prompt(`I've got it!\n=> Drum Roll Please!`);

  syncDelay(3000);

  prompt(`And the result is:\n=> ${output}!`);

  syncDelay(1000);

  prompt(`Phew! That was fun!\n=> Would you like to perform another operation?`);
  let answer = readline.question();
  if (answer[0].toLowerCase() !== 'y') break;
}