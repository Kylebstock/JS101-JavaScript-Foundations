const readline = require(`readline-sync`);

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WIN_SCORE = 3;
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

/* Original expand shorthand code
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
*/

let expandShorthandInput = (input) => {
  switch (input.toLowerCase()) {
    case 'r':
      input = 'rock';
      break;
    case 'p':
      input = 'paper';
      break;
    case 'l':
      input = 'lizard';
      break;
    case 'sp':
      input = 'spock';
      break;
    case 'sc':
      input = 'scissors';
      break;
  }
  return input.toLowerCase();
};

let displayWinner = (userChoice, computerChoice) => {
  prompt(`You chose ${userChoice}, and the computer chose ${computerChoice}.`);

  if (userChoice === computerChoice) {
    prompt(`It' a tie! Try again!`);
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
  if (userScore === WIN_SCORE) {
    prompt(`You have bested the computer 3 out of 5 time! You are victorious!`);
  } else if (computerScore === WIN_SCORE) {
    prompt(`The computer has bested you 3 out of 5 time! The computer is victorious!`);
  }
};

let gameOver = () => {
  if ((userScore === WIN_SCORE) || (computerScore === WIN_SCORE)) {
    return false;
  } else {
    return true;
  }
};

let resetGame = () => {
  userScore = 0;
  computerScore = 0;
};

let yesOrNo = {
  y: "y",
  n: "n",
};

let askToPlayAgain = () => {
  prompt(`Would you like to play again? (y/n)`);
  let answer = readline.question().toLowerCase();

  while (!yesOrNo[answer]) { // previous code: (answer[0] !== 'y' && answer[0] !== 'n')
    prompt(`Please select "y" or "n"`);
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'y') {
    playAgain = true;
  } else {
    playAgain = false;
  }
  return playAgain;
};

do {
  prompt(`Welcome to Rock, Paper, Scissors, Lizard Spock!`);
  prompt(`You will be playing best 3-out-of-5 against the computer.\n=> The first to 3 points will win the game!`);

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

  playAgain = askToPlayAgain();
  resetGame();
  console.clear();

} while (playAgain);