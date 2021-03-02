const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];
const MAX_WINS = 5;

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

let scoreBoard = {
  player1: 0,
  computer: 0,
  round: 1
};

function updateScore(winner) {
  if (winner === 'Player1') {
    scoreBoard.player1 += 1;
  } else if (winner === 'Computer') {
    scoreBoard.computer += 1;
  }
  scoreBoard.round += 1;
}

function clearScoreBoard() {
  scoreBoard.player1 = 0;
  scoreBoard.computer = 0;
  scoreBoard.round = 1;
}

function displayScore() {
  console.log("------------------------------------------");
  console.log(`Player1: ${scoreBoard.player1} | Computer: ${scoreBoard.computer}`);
  console.log("------------------------------------------\n");
}

function checkForMatchWinner() {
  if (scoreBoard.player1 === MAX_WINS) {
    return 'Player1';
  } else if (scoreBoard.computer === MAX_WINS) {
    return 'computer';
  } else {
    return '';
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayRoundWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (playerWins(choice, computerChoice)) {
    prompt('Player1 wins this round!\n');
  } else if (choice === computerChoice) {
    prompt("It's a tie\n");
  } else {
    prompt("Computer Wins this round!\n");
  }
}

function closestChoice(choice) {
  if (choice === "" || choice === "s") return "";

  let regex = new RegExp('^' + choice);
  for (let index = 0; index < VALID_CHOICES.length; index++) {
    if (regex.test(VALID_CHOICES[index])) {
      return VALID_CHOICES[index];
    }
  }
  return "";
}

function welcome() {
  console.log();
  prompt(`Welcome to ${VALID_CHOICES.join(", ")}. First to 5 wins is the winner!\n`);
}

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}


while (true) {


  if (scoreBoard.round === 1) {
    welcome();
  }
  console.log(`----------Round ${scoreBoard.round}----------\n`);

  displayScore();

  prompt(`Choose one: ${VALID_CHOICES.join(", ")
  }. It isn't necessary to type the full name just enough letters to distinguish between choices.`);
  let choice = readline.question().toLowerCase();
  choice = closestChoice(choice);

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That is not a valid choice. Try again.");
    choice = readline.question().toLowerCase();
    choice = closestChoice(choice);
  }

  let computerChoice = getComputerChoice();

  displayRoundWinner(choice, computerChoice);

  let roundWinner = "";
  if (playerWins(choice, computerChoice)) {
    roundWinner = "Player1";
  } else if (playerWins(computerChoice, choice)) {
    roundWinner = "Computer";
  } else {
    roundWinner = "tie";
  }

  updateScore(roundWinner);

  let matchWinner = checkForMatchWinner();
  if (matchWinner) {
    console.log(`${matchWinner} wins the match!`);

    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();

    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') {
      break;
    } else {
      console.clear();
      clearScoreBoard();
    }
  }


}
