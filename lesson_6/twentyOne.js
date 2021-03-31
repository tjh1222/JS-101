let readline = require("readline-sync");

const CARD_VALUES = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 11
};

const SUITS = {
  H: '♡',
  D: '♢',
  S: '♤',
  C: '♧'
};


const CARD_TYPES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


const DECK = [];

const CARD_SUIT_INDEX = 0;
const CARD_NAME_INDEX = 1;
const MAX_VALUE = 21;
const ACE_VALUE_DIFFERENCE = 10;
const HIDDEN_CARD_INDEX = 0;

const PLAYER_HAND = [];
const DEALER_HAND = [];
const PLAYER_NAME = "Player";
const DEALER_NAME = "Dealer";
const DEALER_MIN_SCORE = 17;
const STARTING_CARD_AMOUNT = 2;
const ROUNDS_TO_WIN = 5;

function initializeDeck() {
  let suits = Object.keys(SUITS);
  for (let type = 0; type < CARD_TYPES.length; type += 1) {
    for (let suit = 0; suit < suits.length; suit += 1) {
      DECK.push([suits[suit], CARD_TYPES[type]]);
    }
  }
}

function emptyDeck() {
  for (let idx = 0; idx < DECK.length; idx += 1) {
    DECK.pop();
  }
}


function calculateTotal(hand) {
  let total = getMaximumHandValue(hand);
  if (busted(total) && containsAce(hand)) {
    let numOfAces = howManyAces(hand);
    for (let ace = 0; ace < numOfAces; ace += 1) {
      if (busted(total)) {
        total -= ACE_VALUE_DIFFERENCE;
      }
    }
  }
  return total;
}

function getMaximumHandValue(hand) {
  let total = hand.map(card => {
    return CARD_VALUES[card[CARD_NAME_INDEX]];
  }).reduce((accum, val) => accum + val);
  return total;
}

function busted(total) {
  return (total > MAX_VALUE);
}

function containsAce(hand) {
  let aces = hand.filter(val => val[1] === "A");
  return (aces.length > 0);
}

function howManyAces(hand) {
  let aces = hand.filter(val => val[CARD_NAME_INDEX] === "A");
  return aces.length;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function hit(hand) {
  hand.push(DECK.shift());
}

function hitOrStay() {
  let answer;
  while (!["h", "s"].includes(answer)) {
    prompt("Do you want to (H)it or (S)tay");
    answer = readline.question().trim().toLowerCase();
  }
  return answer;
}

function playerTurn() {
  let playerTotal = calculateTotal(PLAYER_HAND);
  while (true) {
    displayHand(PLAYER_HAND, PLAYER_NAME);
    console.log(`Your Current Total is: ${playerTotal}\n`);
    displayHand(DEALER_HAND, DEALER_NAME, true);
    let answer = hitOrStay();
    if (answer === "h") {
      hit(PLAYER_HAND);
      playerTotal = calculateTotal(PLAYER_HAND);
    }
    if (answer === "s" || busted(playerTotal)) break;
  }

}

function dealerTurn() {
  let dealerTotal = calculateTotal(DEALER_HAND);
  while (dealerTotal < DEALER_MIN_SCORE) {
    displayHand(DEALER_HAND, DEALER_NAME);
    prompt("The Dealer hits\n");
    hit(DEALER_HAND);
    dealerTotal = calculateTotal(DEALER_HAND);
  }
  displayHand(PLAYER_HAND, PLAYER_NAME);
  displayHand(DEALER_HAND, DEALER_NAME);
}

function initialCardDeal() {
  for (let idx = 0; idx < STARTING_CARD_AMOUNT; idx += 1) {
    hit(PLAYER_HAND);
    hit(DEALER_HAND);
  }
}


function displayResults(dealerTotal, playerTotal) {
  let result = detectResult(dealerTotal, playerTotal);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins the round!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win the round!');
      break;
    case 'PLAYER':
      prompt('You win the round!');
      break;
    case 'DEALER':
      prompt('Dealer wins the round!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function detectResult(dealerTotal, playerTotal) {

  if (playerTotal > MAX_VALUE) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > MAX_VALUE) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}


function getHiddenCardRepresentation() {
  let cardString = "";
  cardString += "---------\n";
  cardString += "|       |\n";
  cardString += "|       |\n";
  cardString += "|       |\n";
  cardString += "|       |\n";
  cardString += `---------`;
  return cardString.split("\n");
}

function getCardRepresentation(card) {
  let cardString = "";
  cardString += "---------\n";
  cardString += `|${SUITS[card[CARD_SUIT_INDEX]]}      |\n`;
  cardString += "|       |\n";
  cardString += `|   ${card[CARD_NAME_INDEX]}   |\n`;
  cardString += "|       |\n";
  cardString += `---------`;
  return cardString.split("\n");

}

function constructHand(hand) {
  let result = [];

  for (let line = 0; line < 6; line += 1) {
    let temp = "";
    for (let card = 0; card < hand.length; card += 1) {
      temp += hand[card][line] + " ";
    }
    result.push(temp);
  }
  return result.join("\n");

}


function displayHand(hand, playerName, hidden = false) {

  console.log(`The ${playerName}'s hand is: `);

  let result = [];
  for (let card = 0; card < hand.length; card += 1) {
    if (hidden && card === HIDDEN_CARD_INDEX) {
      result.push(getHiddenCardRepresentation(hand[card]));
    } else {
      result.push(getCardRepresentation(hand[card]));
    }
  }
  console.log(constructHand(result));

}
function setUpGame() {
  emptyDeck();
  initializeDeck();
  shuffle(DECK);
  emptyHand(PLAYER_HAND);
  emptyHand(DEALER_HAND);
}

function playAgain() {
  let answer;
  while (!["y", "n"].includes(answer)) {
    prompt("Do you want to play again? (y or n)");
    answer = readline.question().trim().toLowerCase();
  }
  return (answer === "y");
}

function someoneWon(playerScore, dealerScore) {
  return !!detectWinner(playerScore, dealerScore);
}

function detectWinner(playerScore, dealerScore) {
  if (playerScore === ROUNDS_TO_WIN) {
    return PLAYER_NAME;
  } else if (dealerScore === ROUNDS_TO_WIN) {
    return DEALER_NAME;
  }
  return null;
}

function displayWinner (playerScore, dealerScore) {
  let winner = detectWinner(playerScore, dealerScore);
  prompt(`${winner} wins the match!`);
}

function emptyHand(hand) {
  let copyHand = hand.slice();
  for (let idx = 0; idx <= copyHand.length; idx += 1) {
    hand.pop();
  }
}

function displayScoreboard(playerScore, dealerScore) {
  console.log("\n----------SCOREBOARD----------\n");
  console.log(`   Player: ${playerScore} || Dealer: ${dealerScore}\n`);
  console.log("\n------------------------------\n");
}

function pauseGame() {
  prompt("Press Enter Key to Contine.");
  readline.question();

}

while (true) {
  let playerScore = 0;
  let dealerScore = 0;
  prompt(`Welcome to ${MAX_VALUE}`);
  prompt(`Try to get as close to ${MAX_VALUE} as possible without exceeding.
  Royal Cards are worth 10 points, Aces can be either 11 or 1, and all other
  cards are worth the number displayed on the card. Hit if you want another card.
  Stay otherwise.\n`);
  prompt(`First to win ${ROUNDS_TO_WIN} rounds is the winner!`);

  pauseGame();

  while (true) {
    console.clear();
    setUpGame();
    displayScoreboard(playerScore, dealerScore);
    initialCardDeal();
    playerTurn();
    let playerTotal = calculateTotal(PLAYER_HAND);
    let dealerTotal;

    if (busted(playerTotal)) {
      dealerScore += 1;
      displayResults(dealerTotal, playerTotal);
      if (someoneWon(playerScore, dealerScore)) {
        displayWinner(playerScore, dealerScore);
        break;
      } else {
        pauseGame();
        continue;
      }
    } else {
      prompt(`You stayed at ${playerTotal}`);
    }
    dealerTurn();
    dealerTotal = calculateTotal(DEALER_HAND);
    if (busted(dealerTotal)) {
      playerScore += 1;
      displayResults(dealerTotal, playerTotal);
      if (someoneWon(playerScore, dealerScore)) {
        displayWinner(playerScore, dealerScore);
        break;
      } else {
        pauseGame();
        continue;
      }
    } else {
      prompt(`Dealer stays at ${dealerTotal}`);
    }
    console.log('==============');
    displayHand(DEALER_HAND, DEALER_NAME);
    prompt(`For a total score of: ${dealerTotal}`);
    displayHand(PLAYER_HAND, PLAYER_NAME);
    prompt(`For a total score of: ${playerTotal}`);
    console.log('==============');

    displayResults(dealerTotal, playerTotal);
    let result = detectResult(dealerTotal, playerTotal);
    if (result === "PLAYER") {
      playerScore += 1;
    } else if (result === "DEALER") {
      dealerScore += 1;
    }
    if (someoneWon(playerScore, dealerScore)) {
      displayWinner(playerScore, dealerScore);
      break;
    } else {
      pauseGame();
      continue;
    }

  }
  if (!playAgain()) break;


}
console.log("Thank you for playing 21!");


