const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function converNum(stringNumber) {
  stringNumber = stringNumber.trim().replace('$', '').replace('%', '').replace('years', '');
  return Number(stringNumber);
}

function getLoan () {
  prompt('What is your loan amount? (provide the number without commas; eg. $25000.00)');
  let loanAmount = readline.question();
  loanAmount = converNum(loanAmount);

  while (!loanAmount || loanAmount < 0) {
    prompt('Please re-enter a valid loan amount above 0 and without commas.');
    loanAmount = readline.question();
    loanAmount = converNum(loanAmount);
  }
  return loanAmount;
}

function getAPR () {
  prompt('What is your annual percentage rate(APR)? (eg. 5%)');
  let annualPercentageRate = readline.question();
  let monthlyInterestRate = ((converNum(annualPercentageRate) / 100) / 12);

  if (monthlyInterestRate === 0) {
    return monthlyInterestRate;
  } else {
    while (!monthlyInterestRate || monthlyInterestRate < 0) {
      prompt('Please re-enter a valid annual interest rate.');
      annualPercentageRate = readline.question();
      monthlyInterestRate = ((converNum(annualPercentageRate) / 100) / 12);
      if (monthlyInterestRate === 0) {
        return monthlyInterestRate;
      }
    }
    return monthlyInterestRate;
  }
}

function getMonthLoanDuration () {
  prompt('What is your loan durations in years?');
  let monthLoanDuration = readline.question();
  monthLoanDuration = (converNum(monthLoanDuration));

  while (!monthLoanDuration || !(Number.isInteger(monthLoanDuration)) ||
    monthLoanDuration < 0) {
    prompt('Please re-enter a valid loan duration in years above 0.');
    monthLoanDuration = readline.question();
    monthLoanDuration = (converNum(monthLoanDuration));
  }
  return monthLoanDuration * 12;
}

prompt('Welcome to the Mortgage Calculator!');

let answer = 'y';

while (answer === 'y') {
  prompt('--------------------------------------');

  let finalLoanAmount = getLoan();

  let finalMonthlyInterestRate = getAPR();

  let finalMonthLoanDuration = getMonthLoanDuration();

  let monthlyPayment;
  if (finalMonthlyInterestRate === 0) {
    monthlyPayment = finalLoanAmount / finalMonthLoanDuration;
    monthlyPayment = (Math.round(monthlyPayment * 100) / 100);
  } else {
    monthlyPayment =
      finalLoanAmount * (finalMonthlyInterestRate /
      (1 - Math.pow((1 + finalMonthlyInterestRate),
        (-finalMonthLoanDuration))));
    monthlyPayment = (Math.round(monthlyPayment * 100) / 100);
  }

  prompt('Your monthly payment is: $' + String(monthlyPayment) + '.');

  prompt('Need another calculation?');
  prompt('Please enter "y" or "n".');
  answer = readline.question().toLowerCase();
}

prompt('Goodbye!');