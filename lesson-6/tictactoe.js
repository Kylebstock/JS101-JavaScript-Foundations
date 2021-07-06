/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

const prompt = (message) => {
  console.log(`=> ${message}`);
};
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const FINAL_SERIES_SCORE = 5;
const TIE_GAME_LIMIT = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
let userScore = 0;
let computerScore = 0;
let tieGameScore = 0;
let winningPlayer;
let playAgain;

let displayScores = () => {
  console.log(`Player 1's score: ${userScore}
Player 2's score: ${computerScore}
Tie games score: ${tieGameScore}`);
};

// eslint-disable-next-line max-statements
let displayBoard = (board) => {
  console.clear();
  console.log(`You are '${HUMAN_MARKER}', and the computer is '${COMPUTER_MARKER}':`);
  console.log(''); // aesthetic spacing

  displayScores();

  console.log(''); // aesthetic spacing
  console.log('1)     |2)     |3)');
  console.log(`   ${board['1']}   |   ${board['2']}   |   ${board['3']}`);
  console.log('       |       |');
  console.log('-------+-------+-----');
  console.log('4)     |5)     |6)');
  console.log(`   ${board['4']}   |   ${board['5']}   |   ${board['6']}`);
  console.log('       |       |');
  console.log('-------+-------+-----');
  console.log('7)     |8)     |9)');
  console.log(`   ${board['7']}   |   ${board['8']}   |   ${board['9']}`);
  console.log('       |       |');
  console.log(''); // aesthetic spacing
};

let initializeBoard = () => {
  let board = {};
  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
};

let emptySquares = (board) => {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
};

let boardFull = (board) => {
  return emptySquares(board).length === 0;
};

let detectWinner = (board) => {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
};

let someoneWon = (board) => {
  return !!detectWinner(board);
};

let findAtRiskSquares = (line, board, marker) => {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
};

let checkForGameOver = () => {
  if (tieGameScore === TIE_GAME_LIMIT) {
    return false;
  } else if (userScore === FINAL_SERIES_SCORE) {
    return false;
  } else if (computerScore === FINAL_SERIES_SCORE) {
    return false;
  } else {
    return true;
  }
};

let checkForWhoWon = () => {
  if (tieGameScore === TIE_GAME_LIMIT) {
    winningPlayer = 'Nobody! Tie game limit reached, this game is a draw!';
    return winningPlayer;
  } else if (userScore === FINAL_SERIES_SCORE) {
    winningPlayer = 'You, the Player! Congratulations!';
    return winningPlayer;
  } else {
    winningPlayer = 'The Computer! Better luck next time!';
    return winningPlayer;
  }
};

let joinOr = (arrayInput, delimiter = ', ', lastWord = 'or') => {
  switch (arrayInput.length) {
    case 0:
      return '';
    case 1:
      return `${arrayInput[0]}`;
    case 2:
      return arrayInput.join(` ${lastWord} `);
    default:
      return arrayInput.slice(0, arrayInput.length - 1).join(delimiter) + `${delimiter}${lastWord} ${arrayInput[arrayInput.length - 1]}`;
  }
};

let playerChoosesSquare = (board) => {
  let square;

  while (true) {
    prompt(`Please choose an available square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
};

// eslint-disable-next-line max-statements
let computerChoosesSquare = (board) => {
  let square;
  //offensive move
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquares(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  //defensive move
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquares(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }
  //pick square 5 first if available
  if (!square && board[5] === INITIAL_MARKER) {
    square = '5';
  }
  //pick random square if other options are false
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
};

let answerYesOrNo = {
  y: "y",
  n: "n",
};

let enterToContinue = () => { //pause the flow of the game; aesthetic detail.
  prompt(`Press 'Enter' to continue.`);
  let userInput = readline.question();

  while (userInput === false) {
    prompt(`Please press any key and 'Enter'`);
    userInput = readline.question();
  }
};

let askToPlayAgain = () => {
  prompt(`Would you like to play again? (y/n)`);
  let answer = readline.question().toLowerCase();

  while (!answerYesOrNo[answer]) {
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

let congratsToWinner = (input) => {
  prompt(`And the winner is (drum roll please) ... ${input}`);
};

let resetGame = () => {
  userScore = 0;
  computerScore = 0;
  tieGameScore = 0;
};

let updateScores = board => {
  if (detectWinner(board) === 'Player') {
    userScore++;
  } else if (detectWinner(board) === 'Computer') {
    computerScore++;
  }
};

// eslint-disable-next-line max-statements
let chooseWhoMovesFirst = (board) => {
  prompt(`Who should go first? press "p" for player, press "c" for computer, or press "r" for random.`);
  let choseFirstMove = readline.question().toLowerCase();

  while (!['p', 'c', 'r'].includes(choseFirstMove)) {
    prompt(`Please Select "p" for player, "c" for computer, or "r" for random.`);
    choseFirstMove = readline.question().toLowerCase();
  }

  if (choseFirstMove === "r") {
    let randomFirstMove = Math.floor(Math.random() * 2);
    if (randomFirstMove === 0) {
      prompt(`The Player will go first!`);
      playerChoosesSquare(board);
    } else {
      prompt(`The Computer will go first!`);
      enterToContinue();
    }
  } else if (choseFirstMove === "p") {
    prompt(`The Player will go first!`);
    playerChoosesSquare(board);
  } else {
    prompt(`The Computer will go first!`);
  }
};

let greetPlayer = () => {
  prompt(`Welcome to Tic-Tac-Toe!`);
  prompt(`The first one to fill 3 squares in a row wins the round.`);
  prompt(`And the first one to win 5 rounds will win the game!`);
};


do {
  greetPlayer();
  enterToContinue();

  do {
    let board = initializeBoard();
    displayBoard(board);
    chooseWhoMovesFirst(board);

    while (true) {

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    updateScores(board);

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`The ${detectWinner(board)} won!`);
    } else {
      prompt(`The round was a draw!`);
      tieGameScore++;
    }

    enterToContinue();

    displayBoard(board);

  } while (checkForGameOver());

  congratsToWinner(checkForWhoWon());

  playAgain = askToPlayAgain();

  resetGame();

  console.clear();

} while (playAgain);

prompt(`Okay, thanks for playing Tic-Tac-Toe!`);