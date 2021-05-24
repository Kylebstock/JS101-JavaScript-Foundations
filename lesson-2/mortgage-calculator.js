const readline = require('readline-sync');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

let verifyNumber = (num) => {
  return Number.isNaN(Number(num));
};

let convertIntoNumber = (string) => {
  string = string.replace('$', '').replace('%', '').replace(',', '').replace(' ', '');
  return (Number(string));
};

let syncDelay = (milliseconds) => {
  let start = new Date().getTime();
  let end = 0;
  while ((end - start) < milliseconds) {
    end = new Date().getTime();
  }
};

prompt(`Greetings human! My name is V.I.K.I.`);
syncDelay(1000);
prompt(`I'm a Virtual Interactive Kinetic Intelligence program.`);
syncDelay(3000);
prompt(`Basically... I'm a super computer capable of calculating the most complex mysteries of the universe.`);
syncDelay(2000);
prompt(`I was even able to calculate the meaning of life, the universe and everything in a single afternoon!`);
syncDelay(3000);
prompt(`The Answer is 42, by-the-way...`);
syncDelay(4000);
prompt(`Anyway, ... dont be rude human! What's your name?`);
let name = readline.question();
prompt(`Okay, I will call you ${name}`);
syncDelay(3000);
prompt(`Now ${name}, I precieve that you need help with a loan calculation...`);
syncDelay(2000);
prompt(`So... let's get to work on that!`);
syncDelay(2000);

while (true) {
  let getLoanAmount = () => {
    prompt(`What's the loan amount?`);
    let loanAmount = readline.question();
    loanAmount = convertIntoNumber(loanAmount);

    while (verifyNumber(loanAmount) || loanAmount <= 0) {
      prompt(`That doesnt appear to be a valid loan amount.\n=> Please entera valid loan amount, e.g., $20,000.00, etc.`);
      loanAmount = readline.question();
      loanAmount = convertIntoNumber(loanAmount);
    }
    return loanAmount;
  };

  let getAPR = () => {
    prompt(`Whats the annual percentage rate (APR)?`);
    let annualPercentRate = readline.question();
    annualPercentRate = convertIntoNumber(annualPercentRate);

    while (verifyNumber(annualPercentRate) || annualPercentRate < 0) {
      prompt(`That doesnt appear to be a valid percentage rate.\n=> Please enter a valid percent, e.g., %10 or 10, etc.`);
      annualPercentRate = readline.question();
      annualPercentRate = convertIntoNumber(annualPercentRate);
    }
    return annualPercentRate;
  };

  let getLoanDuration = () => {
    prompt(`Finally, how many years is the loan duration?`);
    let yearlyLoanDuration = readline.question();
    yearlyLoanDuration = convertIntoNumber(yearlyLoanDuration);

    while (verifyNumber(yearlyLoanDuration) ||
    (yearlyLoanDuration - Math.floor(yearlyLoanDuration) !== 0)) {
      prompt(`I'm sorry, that doesnt appear to be a valid loan duration.\n=> Please enter only numbers, e.g., 15 or 20, etc.`);
      yearlyLoanDuration = readline.question();
      yearlyLoanDuration = convertIntoNumber(yearlyLoanDuration);
    }
    return yearlyLoanDuration;
  };

  let finalLoanAmount = getLoanAmount();

  let monthlyInterestRate = (getAPR() / 100) / 12;

  let monthlyLoanDuration = getLoanDuration() * 12;

  let calculatePayment = () => {
    if (monthlyInterestRate === 0 ) {
      let monthlyPayment = finalLoanAmount / monthlyLoanDuration;
      return Math.round(monthlyPayment);
    } else {
      let monthlyPayment = finalLoanAmount * (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-monthlyLoanDuration))));
      return Math.round(monthlyPayment);
    }
  };

  let loanPayment = calculatePayment();


  //prompt(`Okay ${name}, I'm analyzing now...`);
  syncDelay(1000);
  prompt(`...`);
  syncDelay(1000);
  prompt(`...`);
  syncDelay(1000);
  prompt(`...`);
  syncDelay(1000);
  prompt(`I've got it!`);
  syncDelay(2000);
  prompt(`The monthly payment is $${loanPayment}, over ${monthlyLoanDuration} months.`);
  syncDelay(4000);
  prompt(`Would you like to perform another calculation? (y/n)`);
  let answer = readline.question();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt(`Please select "y" or "n"`);
    answer = readline.question().toLowerCase();
  }

  if (answer[0].toLowerCase() !== 'y') break;
}