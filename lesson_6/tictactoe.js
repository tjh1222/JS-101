let readline = require('readline-sync');


const INITIAL_MARKER = ' ';
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const GAMES_IN_MATCH = 5;
const CENTER = 5;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const WHO_GOES_FIRST = 'computer';
const WHOS_TURN_IS_IT = {
  player: false,
  computer: false
};

let scoreBoard = {
  player: 0,
  computer: 0
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function joinOr(array, delimeter = ', ', joiningWord = "or") {
  if (array.length <= 2) return array.join( " " + joiningWord + " ");

  array[array.length - 1] = joiningWord + " " + array[array.length - 1];
  return array.join(delimeter);
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  | ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  | ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board), ", ")}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("I'm sorry. That is not a valid choice");
  }
  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(board, defenseMarker) {

  let winningLines = availableWinningLines(board, WINNING_LINES, defenseMarker);

  for (let line = 0; line < winningLines.length; line++) {
    for (let square = 0; square < winningLines[line].length; square += 1) {
      if (board[winningLines[line][square]] === INITIAL_MARKER) {
        return winningLines[line][square];
      }
    }
  }
  return null;
}

function availableWinningLines(board, winningLines, defenseMark) {

  winningLines = winningLines.filter((line) => {
    let available = line.some((square) => board[square] === INITIAL_MARKER);
    let impossibleToWin = line.some((square) => board[square] === defenseMark);
    let movesToWin = 0;
    line.forEach((square) => {
      if (board[square] === INITIAL_MARKER) {
        movesToWin += 1;
      }
    });
    return (available && !impossibleToWin && (movesToWin === 1));

  });
  return winningLines;
}

function checkCenterSquare(board) {
  return board[CENTER] === INITIAL_MARKER;
}

function computerChoosesSquare(board) {
  let offenseRiskSquare = findAtRiskSquare(board, HUMAN_MARKER);
  let defenseRiskSquare = findAtRiskSquare(board, COMPUTER_MARKER);

  if (offenseRiskSquare) {
    board[offenseRiskSquare] = COMPUTER_MARKER;
  } else if (defenseRiskSquare) {
    board[defenseRiskSquare] = COMPUTER_MARKER;
  } else if (checkCenterSquare(board)) {
    board[CENTER] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    board[emptySquares(board)[randomIndex]] = COMPUTER_MARKER;
  }

}
function emptySquares(board) {
  let emptySquares = Object.keys(board).filter(square => {
    return board[square] === INITIAL_MARKER;
  });
  return emptySquares;
}

function boardFull(board) {
  return (emptySquares(board).length === 0);
}

function someoneWonRound(board) {
  return !!detectRoundWinner(board);
}

function someoneWonMatch(scoreBoard) {
  return !!detectMatchWinner(scoreBoard);
}

function resetScoreBoard(scoreBoard) {
  for (let team in scoreBoard) {
    scoreBoard[team] = 0;
  }
}

function displayScore(scoreBoard) {
  let [playerName, computerName] = Object.keys(scoreBoard);
  console.log(`\n\n${playerName}:${scoreBoard[playerName]} | ${computerName}: ${scoreBoard[computerName]}\n`);
}

function detectMatchWinner(scoreBoard) {
  for (let player in scoreBoard) {
    if (scoreBoard[player] === GAMES_IN_MATCH) {
      return player;
    }
  }
  return null;
}

function detectRoundWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (  board[sq1] === HUMAN_MARKER &&
          board[sq2] === HUMAN_MARKER &&
          board[sq3] === HUMAN_MARKER
    ) {
      return 'player';
    } else if ( board[sq1] === COMPUTER_MARKER &&
                board[sq2] === COMPUTER_MARKER &&
                board[sq3] === COMPUTER_MARKER
    ) {
      return 'computer';
    }
  }
  return null;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function resetTurnOrder(turnObj) {
  for (let player in turnObj) {
    turnObj[player] = false;
  }
}

function alternatePlayer(currentPlayer) {
  for (let player in WHOS_TURN_IS_IT) {
    if (WHOS_TURN_IS_IT[player] === false) {
      WHOS_TURN_IS_IT[player] = true;
      currentPlayer = player;
    } else if (WHOS_TURN_IS_IT[player] ===  true) {
      WHOS_TURN_IS_IT[player] = false;
    }
  }
  return currentPlayer;
}

let currentPlayer = "";
let firstMove = WHO_GOES_FIRST;
while (true) {
  if (someoneWonMatch(scoreBoard)) {
    console.log(`The winner is ${detectMatchWinner(scoreBoard)}!`);
    let answer;
    while (!['y', 'Y', 'n', 'N'].includes(answer)) {
      prompt("Would you like to play again? (y or n)");
      answer = readline.question().trim().toLowerCase();
    }
    if (answer === 'n') break;

    currentPlayer = "";
    resetScoreBoard(scoreBoard);
  }
  resetTurnOrder(WHOS_TURN_IS_IT);
  if (firstMove === 'choose') {
    while (!['player', 'computer'].includes(firstMove)) {
      prompt("Who goes first? (computer or player)");
      firstMove = readline.question().trim().toLowerCase();
    }
  }
  WHOS_TURN_IS_IT[firstMove] = true;
  currentPlayer = firstMove;
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
    displayScore(scoreBoard);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWonRound(board) || boardFull(board)) break;
  }


  if (someoneWonRound(board)) {
    prompt(`${detectRoundWinner(board)} won!`);
    displayBoard(board);
    scoreBoard[detectRoundWinner(board)] += 1;
    console.log(scoreBoard);
  } else {
    prompt("It's a tie!");
  }

}

prompt('Thanks for playing Tic Tac Toe!');