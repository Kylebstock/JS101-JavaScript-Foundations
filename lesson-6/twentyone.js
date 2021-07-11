let readline = require('readline-sync');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

const CARD_SUITS = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const CARD_FACE_VALUE = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const WINNING_NUMBER = 21;
const MAX_PLAYER_SCORE = 20;
const STARTING_PLAYER_SCORE = 10;
let playersHand = [];
let dealersHand = [];
let activeDeck = [];
let playerScore;
let currentBet = 0;
let newScore;

let shuffleArray = (array) => { //function to shuffle array of values but will mutate array.
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
};

let shuffleTheDeck = () => { //function to shuffle the suits and values; wont mutate original array.
  let shuffledDeck = [];

  for (let sIndex = 0; sIndex < CARD_SUITS.length; sIndex++) {
    let cardSuits = CARD_SUITS[sIndex];

    for (let vIndex = 0; vIndex < CARD_FACE_VALUE.length; vIndex++) {
      let cardValues = CARD_FACE_VALUE[vIndex];
      shuffledDeck.push([cardSuits, cardValues]);
    }
  }
  return shuffleArray(shuffledDeck);
};

let calculateCardsInHand = (cards) => {
  //cards = [['hearts', '3'], ['clubs', '7'], ['spades', 'jack'], etc.]
  let cardValues = cards.map(card => card[1]);

  let sum = 0;
  cardValues.forEach(value => {
    if (value === 'Ace') {
      sum += 11;
    } else if (['Jack', 'Queen', 'King'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });
  //correcting for aces
  cardValues.filter(value => value === "Ace").forEach(_ => {
    if (sum > WINNING_NUMBER) sum -= 10; //filter for aces, and turns each one to "1" until sum is less than 21
  });

  return sum;
};

let checkForBust = (cards) => {
  return calculateCardsInHand(cards) > WINNING_NUMBER;
};

let convertIntoNumber = (string) => {
  string = string.replace('$', '').replace('.', '').replace(',', '').replace(' ', '');
  return (Number(string));
};

let makeABet = (playerScore) => {
  prompt(`You have $${playerScore}! How much would you like to bet?`);
  currentBet = convertIntoNumber(readline.question());
  while (currentBet > playerScore || !Number(currentBet)) {
    prompt(`Numbers only, and bets must be less than/equal to your score`);
    currentBet = convertIntoNumber(readline.question());
  }
  return currentBet;
};

let checkForWinningHand = (dealersHand, playersHand) => {
  let playersTotal = calculateCardsInHand(playersHand);
  let dealersTotal = calculateCardsInHand(dealersHand);

  if (playersTotal > WINNING_NUMBER) {
    return 'PLAYER_BUSTED';
  } else if (dealersTotal > WINNING_NUMBER) {
    return 'DEALER_BUSTED';
  } else if (playersTotal > dealersTotal) {
    return 'PLAYER_WINS';
  } else if (playersTotal < dealersTotal) {
    return 'DEALER_WINS';
  } else {
    return 'TIE_GAME';
  }
};

let displayResults = (dealersHand, playersHand) => {
  let result = checkForWinningHand(dealersHand, playersHand);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!\n');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!\n');
      break;
    case 'PLAYER_WINS':
      prompt('You win!\n');
      break;
    case 'DEALER_WINS':
      prompt('Dealer wins!\n');
      break;
    case 'TIE_GAME':
      prompt("It's a tie!\n");
  }
};

let updateScore = () => {
  let result = checkForWinningHand(dealersHand, playersHand);

  switch (result) {
    case 'PLAYER_BUSTED':
      newScore = playerScore - currentBet;
      break;
    case 'DEALER_BUSTED':
      newScore = playerScore + currentBet;
      break;
    case 'PLAYER_WINS':
      newScore = playerScore + currentBet;
      break;
    case 'DEALER_WINS':
      newScore = playerScore - currentBet;
      break;
    case 'TIE_GAME':
      newScore = playerScore;
  }
  return newScore;
};

let dealTwoCards = () => {
  return [activeDeck.pop(), activeDeck.pop()];
};

let displayHand = (cards) => {
  return cards.map(card => `${card[1]} of ${card[0]}`).slice(0, cards.length - 1).join(', ')
  + ` and ${cards[cards.length - 1][1]} of ${cards[cards.length - 1][0]}`;
};

let displayScore = (playerScore) => {
  console.log(`Current Total: $${playerScore}`);
  console.log(`Current Bet: $${currentBet}\n`);
};

let initialDeal = () => {
  playersHand.push(...dealTwoCards(activeDeck));
  dealersHand.push(...dealTwoCards(activeDeck));

  prompt(`Your starting hand is: ${playersHand[0][1]} of ${playersHand[0][0]}, and a ${playersHand[1][1]} of ${playersHand[1][0]}`);
  prompt(`And the dealer has a: ${dealersHand[0][1]} of ${dealersHand[0][0]}, and ???\n`);
};

let askToHitOrStay = () => {
  let playersAnswer;
  prompt(`What would you like to do? Press 'h' to hit, or 's' to stay.`);
  playersAnswer = readline.question().toLowerCase();

  while (!['h', 's'].includes(playersAnswer)) {
    prompt(`Sorry, please press 'h' to hit, or 's' to stay.`);
    playersAnswer = readline.question().toLowerCase();
  }
  return playersAnswer;
};

let playerHit = (answer) => {
  if (answer === 'h') {
    playersHand.push(activeDeck.pop());
    prompt(`You hit! Now you have: ${displayHand(playersHand)}`);
    prompt(`For a total of: ${calculateCardsInHand(playersHand)}\n`);
  }
};

let dealerHitsOrStays = () => {
  prompt(`The dealer flips his card revealing: ${displayHand(dealersHand)}`);

  while (calculateCardsInHand(dealersHand) <
  calculateCardsInHand(playersHand)) {
    prompt(`The dealer hits!`);
    dealersHand.push(activeDeck.pop());
    prompt(`Now he has: ${displayHand(dealersHand)}, for a total of: ${calculateCardsInHand(dealersHand)}`);
  }
};

let revealWinningHand = () => {
  console.log(`------------------------`);
  prompt(`You have: ${displayHand(playersHand)}, for a total of: ${calculateCardsInHand(playersHand)}`);
  prompt(`The dealer has: ${displayHand(dealersHand)}, for a total of: ${calculateCardsInHand(dealersHand)}`);
  console.log(`------------------------\n`);

  displayResults(dealersHand, playersHand);
};

let isPlayerScoreMaxed = (playerScore) => {
  let maxScore;
  if (playerScore >= MAX_PLAYER_SCORE) {
    prompt(`Sorry, security has escorted you out for suspicion of card counting. You should lay low for awhile!\n`);
    maxScore = true;
  } else if (playerScore < 1) {
    prompt(`Oh no! you've lost all your money! You may have a gambling problem and you should probably seek help!\n`);
    maxScore = true;
  } else {
    maxScore = false;
  }
  return maxScore;
};

let updateDisplayWhenBust = (cards) => {
  console.clear();
  playerScore = updateScore();
  currentBet = 0;
  displayScore(playerScore);
  prompt(`The current hand is: ${displayHand(cards)}`);
  prompt(`For a total of: ${calculateCardsInHand(cards)}\n`);
  displayResults(dealersHand, playersHand);
};

let askToPlayAgain = () => {
  prompt(`Would you like to play another hand? (yes/no)`);
  let answer = readline.question().toLowerCase();

  while (!['y', 'n', 'yes', 'no'].includes(answer)) {
    prompt(`Please select "yes" or "no"`);
    answer = readline.question().toLowerCase();
  }
  return answer[0] === 'y';
};

let greetPlayer = () => {
  prompt(`Welcome to 21!`);
  prompt(`The rules are simple! Whoever gets the closest to 21 without going over wins!`);
  prompt(`May the odds be ever in your favor!`);
};

let enterToContinue = () => { //pause the flow of the game; aesthetic detail.
  prompt(`Press 'Enter' to continue.`);
  let userInput = readline.question();

  while (userInput === false) {
    prompt(`Please press 'Enter' to continue`);
    userInput = readline.question();
  }
};

do {
  console.clear();
  greetPlayer();
  enterToContinue();
  playerScore = STARTING_PLAYER_SCORE;

  while (!isPlayerScoreMaxed(playerScore)) {
    console.clear();
    playersHand = [];
    dealersHand = [];
    activeDeck = shuffleTheDeck();
    displayScore(playerScore); //player can see initial score
    makeABet(playerScore); //player makes a bet
    console.clear();
    displayScore(playerScore); //this line updates score after bet is made
    initialDeal();

    while (true) {
      let playersTurn = askToHitOrStay();
      console.clear();
      displayScore(playerScore);
      playerHit(playersTurn);
      if (playersTurn === 's' || checkForBust(playersHand)) break;
    }

    if (checkForBust(playersHand)) {
      updateDisplayWhenBust(playersHand);
      if (askToPlayAgain()) {
        continue;
      } else {
        break;
      }
    } else {
      prompt(`You stayed at: ${calculateCardsInHand(playersHand)}`);
    }

    prompt(`Now it's the dealers turn...\n`);
    enterToContinue();
    console.clear();
    displayScore(playerScore);
    dealerHitsOrStays();

    if (checkForBust(dealersHand)) {
      updateDisplayWhenBust(dealersHand);
      if (askToPlayAgain()) {
        continue;
      } else {
        break;
      }
    } else {
      prompt(`The dealer stays at: ${calculateCardsInHand(dealersHand)}\n`);
    }

    enterToContinue();
    console.clear();
    playerScore = updateScore(); //updates score when reavealing who the winner is
    currentBet = 0; //re-sets the bet after revealing who won
    displayScore(playerScore); //updates the display with new scores
    revealWinningHand();

    if (!askToPlayAgain()) break;
  }

  playerScore = STARTING_PLAYER_SCORE;
  currentBet = 0;
  let toContinue = readline.question(`Well... would you like to try your luck again? (y/n)\n`).toLowerCase();
  while (!['y', 'n', 'yes', 'no'].includes(toContinue)) {
    prompt(`please select 'y' or 'n'`);
    toContinue = readline.question().toLowerCase();
  }

  if (!'y'.includes(toContinue)) break;

} while (true);

prompt(`Thank you for playing!`);