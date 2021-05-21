const readline = require(`readline-sync`);

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const BEST_OF_FIVE = 3;
let playAgain = true;
let userScore = 0;
let computerScore = 0;

let prompt = (message) => {
  console.log(`=> ${message}`);
};

let getUsersScore = () => {
  prompt('You win!');
  userScore++;
};

let getComputersScore = () => {
  prompt('Computer win!');
  computerScore++;
};

let expandShorthandInput = (input) => {
  switch (input[0]) {
    case 'r':
      input = 'rock';
      break;
    case 'p':
      input = 'paper';
      break;
    case 'l':
      input = 'lizard';
      break;
    case 's':
      if (input[1] === 'p') {
        input = 'spock';
      } else if (input[1] === 'c') {
        input = 'scissors';
      }
  }
  return input;
};

let displayWinner = (userChoice, computerChoice) => {
  prompt(`You chose ${userChoice}, and the computer chose ${computerChoice}.`);

  if (userChoice === computerChoice) {
    prompt(`it' a tie!`);
  } else if (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) {
    getUsersScore();
  } else if (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) {
    getUsersScore();
  } else if (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) {
    getUsersScore();
  } else if (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) {
    getUsersScore();
  } else if (userChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors')) {
    getUsersScore();
  } else {
    getComputersScore();
  }
};

let getFinalWinner = (userScore, computerScore) => {
  if (userScore === BEST_OF_FIVE) {
    prompt(`You have bested the computer 3 out of 5 time! You are victorious!`);
  } else if (computerScore === BEST_OF_FIVE) {
    prompt(`The computer has bested you 3 out of 5 time! The computer is victorious!`);
  }
};

let gameOver = () => {
  if ((userScore === BEST_OF_FIVE) || (computerScore === BEST_OF_FIVE)) {
    return false;
  } else {
    return true;
  }
};

let resetGame = () => {
  userScore = 0;
  computerScore = 0;
};

let askToPlayAgain = () => {
  prompt(`Would you like to play again? (y/n)`);
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt(`Please select "y" or "n"`);
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'y') {
    playAgain = true;
  } else {
    playAgain = false;
  }
};

do {
  do {
    prompt(`Please choose one: ${VALID_CHOICES.join(', ')}`);
    let userChoice = expandShorthandInput(readline.question());

    while (!VALID_CHOICES.includes(userChoice)) {
      prompt(`That isn't a valid choice. Please try again:`);
      userChoice = expandShorthandInput(readline.question());
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);

    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(userChoice, computerChoice);

    prompt(`The user's score is: ${userScore}, and the computer's score is: ${computerScore}`);

    getFinalWinner(userScore, computerScore);

  } while (gameOver());

  askToPlayAgain();
  resetGame();

// eslint-disable-next-line no-unmodified-loop-condition
} while (playAgain);