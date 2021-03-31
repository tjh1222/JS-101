//twenty one game card display testing

let hand = [];

function getCard(card) {
  let cardString = "";
  cardString += "---------\n";
  cardString += "|       |\n";
  cardString += `|   ${card[1]}   |\n`;
  cardString += "|       |\n";
  cardString += `---------`;

  return cardString.split("\n");

}

function constructHand() {
  let result = [];

  for (let line = 0; line < 5; line += 1) {
    let temp = "";
    for (let card = 0; card < hand.length; card += 1) {
      temp += hand[card][line] + " ";
    }
    result.push(temp);
  }
  return result.join("\n");

}

function displayHand() {
  //get cards
  //check if hidden
  //add to hand if not hidden
  // if hidden. swap out with hidden card representation
  //add to hand
  //construct hand
  console.log(constructHand());
}

hand.push(getCard([ 'D', 'J' ]));
hand.push(getCard([ 'D', 'A' ]));
hand.push(getCard([ 'D', '8' ]));

displayHand();

//reconstruct card

// for (let i = 0; i < hand.length; i += 1) {
//   console.log(hand[i].join("\n"));
// }


