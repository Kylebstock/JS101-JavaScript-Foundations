const readline = require(`readline-sync`);

const VALID_CHOICES = ['rock', 'paper', 'scissors',];

let prompt = (message) => {
  console.log(`=> ${message}`);
};

let displayWinner = (userChoice, computerChoice) => {
  prompt(`You chose ${userChoice}, and the computer chose ${computerChoice}.`);

  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')) {
    prompt(`You won!`);
  } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
   (userChoice === 'paper' && computerChoice === 'scissors') ||
   (userChoice === 'scissors' && computerChoice === 'rock')) {
    prompt(`Computer won!`);
  } else {
    prompt(`It's a tie!`);
  }
};

while (true) {
  prompt(`Please choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt(`That isn't a valid choice. Please try again:`);
    userChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(userChoice, computerChoice);

  prompt(`Would you like to play again? (y/n)`);
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt(`Please select "y" or "n"`);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}