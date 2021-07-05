//initialize (shuffle) deck
//deal cards to player and dealer
//player chooses to stay or hit
  // - repeat until stay or bust
  // - if bust then dealer wins
//dealer chooses to stay or hit
  // - repeat until at least greater than 17 or bust
  // - if dealer bust then player wins
//compare cards and delclare winner

let readline = require('readline-sync');

let prompt = (message) => {
  console.log(`=> ${message}`);
};

const CARD_SUITS = ['hearts', 'diamonds', 'spades', 'clubs'];
const CARD_FACE_VALUE = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let shuffleDeck = (array) => {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}



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


/*
let askToHitOrStay = () => {
  prompt(`Do you want to hit or stay?`);
  let playerAnswer = readline.question().toLowerCase();
  let checkAnswer = ['s', 'h', 'stay', 'hit'];

  while (!checkAnswer.includes(playerAnswer)) {
    prompt(`please type either "hit", "stay" or "h", "s"`);
    playerAnswer = readline.question().toLowerCase();
  }
}
*/

let dealCardsToPlayer = (CARD_FACE_VALUE) => {
  let firstCard = Math.floor(Math.random() * (CARD_FACE_VALUE + 1));
  let secondCard = Math.floor(Math.random() * (index2 + 1));
  prompt(`You have an ${firstCard}, and an ${secondCard}`);
}

shuffleDeck(CARD_FACE_VALUE);

dealCardsToPlayer(CARD_FACE_VALUE, CARD_FACE_VALUE);

/*
while (true) {
  prompt("do you want to hit or stay?");
  let playerAnswer = readline.question().toLowerCase();
  if (playerAnswer === 'stay' || busted()) break;
}

if (busted()) {
  // probably end the game? or ask the user to play again?
} else {
  prompt("You chose to stay!");  // if player didn't bust, must have stayed to get here
}
*/