let readline = require('readline-sync');

let noun = readline.question('Enter a noun:\n');
let adjective = readline.question('Enter an adjective:\n');
let verb = readline.question('Enter a verb:\n');
let adverb = readline.question('Enter an adverb:\n');


console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb} ${adverb} over the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb} up ${adjective} Joe's turtle.`);