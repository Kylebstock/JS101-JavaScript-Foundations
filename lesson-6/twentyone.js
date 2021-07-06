let readline = require('readline-sync');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

const CARD_SUITS = ['hearts', 'diamond', 'spades', 'clubs'];
const CARD_FACE_VALUE = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let playersHand = [];
let dealersHand = [];
let activeDeck = [];
let playAgain;

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
    if (value === 'ace') {
      sum += 11;
    } else if (['jack', 'queen', 'king'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });
  //correcting for aces
  cardValues.filter(value => value === "ace").forEach(_ => {
    if (sum > 21) sum -= 10; //filter for aces, and turns each one to "1" until sum is less than 21
  });

  return sum;
};

let checkForBust = (cards) => {
  return calculateCardsInHand(cards) > 21;
};

let askToHitOrStay = () => {
  let feelingLucky;
  prompt(`Do you want to hit or stay?`);
  let playerAnswer = readline.question().toLowerCase();
  let checkAnswer = ['s', 'h', 'stay', 'hit'];

  while (!checkAnswer.includes(playerAnswer)) {
    prompt(`please type either "hit", "stay" or "h", "s"`);
    playerAnswer = readline.question().toLowerCase();
  }

  if (playerAnswer === 'h' || playerAnswer === 'hit') {
    feelingLucky = true;
  } else {
    feelingLucky = false;
  }
  return feelingLucky;
};

let checkForWinningHand = (playersHand, dealersHand) => {
  let playersTotal = calculateCardsInHand(playersHand);
  let dealersTotal = calculateCardsInHand(dealersHand);

  if (playersTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealersTotal > 21) {
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
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER_WINS':
      prompt('You win!');
      break;
    case 'DEALER_WINS':
      prompt('Dealer wins!');
      break;
    case 'TIE_GAME':
      prompt("It's a tie!");
  }
};

let dealTwoCards = () => {
  return [activeDeck.pop(), activeDeck.pop()];
};

let askToPlayAgain = () => {
  prompt(`Would you like to play again? (y/n)`);
  let playerAnswer = readline.question().toLowerCase();
  while (!['y', 'n'].includes(playerAnswer)) {
    prompt(`Please select "y" or "n"`);
    playerAnswer = readline.question().toLowerCase();
  }
  if (playerAnswer === 'y') {
    playAgain = true;
  } else {
    playAgain = false;
  }
  return playAgain;
};

let enterToContinue = () => { //pause the flow of the game; aesthetic detail.
  prompt(`Press 'Enter' to continue.`);
  let userInput = readline.question();

  while (userInput === false) {
    prompt(`Please press 'Enter' to continue`);
    userInput = readline.question();
  }
};

let resetHands = () => {
  playersHand = [];
  dealersHand = [];
};


while (true) {
  prompt(`Welcome to 21! May the odd be ever in your favor!`);
  enterToContinue();

  activeDeck = shuffleTheDeck();
  playersHand = [];
  dealersHand = [];

  playersHand.push(...dealTwoCards(activeDeck));
  dealersHand.push(...dealTwoCards(activeDeck));

  prompt(`You have a ${playersHand[0][1]} of ${playersHand[0][0]}, and a ${playersHand[1][1]} of ${playersHand[1][0]}`);
  prompt(`The dealer has a ${dealersHand[0][1]} of ${dealersHand[0][0]}, and ???`);

  while (true) {
    let playersTurn;
    while (true) {
      prompt(`Now, you've got to ask yourself one question: 'do I feel lucky? well... do ya?'`);
      prompt(`press 'h' to hit, or 's' to stay.`);
      playersTurn = readline.question().toLowerCase();
      if (['h', 's'].includes(playersTurn)) break;
      prompt(`Sorry, please press 'h' to hit, or 's' to stay.`);
    }
    
  }
}
