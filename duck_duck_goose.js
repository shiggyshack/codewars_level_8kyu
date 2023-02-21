//Provided an array of Player Objects, with .name property, find the player's name that will be selected given the goose value. (Index is starting at 1)
function duckDuckGoose(players, goose) {
  //Keep adjusting the goose variable until it is less than or equal to the array length
  while(goose > players.length){
      goose = goose - players.length
    }
  //Return the .name property of the element at players[goose-1] index
  if(goose <= players.length){
    return players[goose-1].name;
    }
}
