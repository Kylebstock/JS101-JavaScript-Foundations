const readline = require(`readline-sync`);

let prompt = (message) => {
  console.log(`==> ${message}`);
}

prompt(`Enter the first number:`);
let one = readline.question();
one = Number(one);

prompt(`Enter the second number:`);
let two = readline.question();
two = Number(two);

let add = one + two;
let subtract = one - two;
let multiply = one * two;
let divide = one / two;
let remainder = one % two;
let power = one ** two;

prompt(`${one} + ${two} = ${add}`);
prompt(`${one} - ${two} = ${subtract}`);
prompt(`${one} * ${two} = ${multiply}`);
prompt(`${one} / ${two} = ${divide}`);
prompt(`${one} % ${two} = ${remainder}`);
prompt(`${one} ** ${two} = ${power}`);