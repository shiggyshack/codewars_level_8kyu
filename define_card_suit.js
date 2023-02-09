//Create a function defineSuit that passes in a parameter of card (as a string), written of the form "4♥", where the lowercase name of the suit ('heart') is returned.

function defineSuit(card) {
  //creates a variable to hold the last character of the card parameter regardless of length.
  let suit = card[card.length-1]
  //switch case is used on the suit variable for the four possible suits. 
  switch (suit) {
      case '♣': return 'clubs';
      case '♦': return 'diamonds';
      case '♥': return 'hearts';
      //default here represents 'spades'
      default: return 'spades'
  }
}
