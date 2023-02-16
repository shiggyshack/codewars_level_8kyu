//Return the probability of drawing a blue marble on the next draw given the four values present as parameters in the situation

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  //The denominator calculates how many marbles remain in the bag and the numerator represents how many blue are left...P(event) = possible out of total
  return (blueStart-bluePulled)/((blueStart+redStart)-(bluePulled+redPulled))
}
