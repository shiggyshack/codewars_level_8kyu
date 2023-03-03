//Create a function that accepts two parameters, an array holding the two teams, and an array holding the final scores. Create a return statement that will announce which teams played each other and the outcomes of those games.
function uefaEuro2016(teams, scores){
  //Assume the winner is team won until a conditional checks otherwise
  let winner = teams[1]
  //If index 0 is larger than index 1 in the scores array, winner variable is 0th index
  if(scores[0] > scores[1]){
    winner = teams[0];
  }
  //If index 1 is larger than index 0 in the scores array, winner variable is 1st index
  else if(scores[0] < scores[1]){
    winner = teams[1];
  }
  //Otherwise a unique statement is needed to represent a draw occurred.
  else{
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
  return `At match ${teams[0]} - ${teams[1]}, ${winner} won!`
}
