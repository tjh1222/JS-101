const WHOS_TURN_IS_IT = {
  player: true,
  computer: false
};

function alternatePlayer(currentPlayer) {
  for (let player in WHOS_TURN_IS_IT) {
    if (WHOS_TURN_IS_IT[player] === false) {
      WHOS_TURN_IS_IT[player] = true;
      currentPlayer = player;
    } else if (WHOS_TURN_IS_IT[player] ===  true) {
      WHOS_TURN_IS_IT[player] = false;
    }
  }
  // console.log(WHOS_TURN_IS_IT);
  // console.log("alternatePlayer functon test");
  // console.log(currentPlayer);
  return currentPlayer;
}

console.log(alternatePlayer('player'));
console.log(alternatePlayer('computer'));
console.log(WHOS_TURN_IS_IT);