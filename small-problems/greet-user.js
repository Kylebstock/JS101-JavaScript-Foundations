let readline = require('readline-sync');

console.log(`What is your name?`);
let name = readline.question();

if (name.includes('!')) {
  let newName = name.slice(0, -1);
  console.log(`HELLO ${newName.toUpperCase()}, I DONT KNOW WHAT WE'RE YELLING ABOUT!`);
} else {
  console.log(`Hello ${name}, it's nice to meet you.`);
}