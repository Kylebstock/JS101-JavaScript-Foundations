//Build a program that logs when the user will retire 
//and how many more years the user has to work until retirement.
/*
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/
//input: current age, desired retired age
//output: current year, desired years of retirement, amount of years to retirement
//ask user for input of age
//ask user ofr input of desired retirement age
//declare variable for todays day
//declare variable to getFullYear();
//create function:
  //log todays year
  //create future year variable that subtracts desired retirement age from curent age and add to future year variable
  //log

const readline = require('readline-sync');

let currentAge = Number(readline.question(`What is your age?\n`));

let retireAge = Number(readline.question(`At what age would you like to retire?\n`));
while (retireAge < currentAge) {
  console.log(`Retirement age must be a number that is greater then your current age.`);
  retireAge = Number(readline.question(`At what age would you like to retire?\n`));
}

let todaysDate = new Date();
let currentYear = todaysDate.getFullYear();

let remainingYears = retireAge - currentAge;
let futureYear = remainingYears + currentYear;

console.log(`It's ${currentYear}, so you will retire in ${futureYear}!`);
console.log(`You only have ${remainingYears} years of work to go!`);