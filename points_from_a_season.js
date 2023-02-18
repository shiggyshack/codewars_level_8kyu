//Games will be an array written as ['x:y', 'x:y', etc...] and represents scores from a season.

function points(games) {
  let x = 0;
  //Iterate through each element in an array
  for(let i = 0; i < games.length; i++){
    //Split each element using the ":" so that you can compare x and y...depending on the comparision update the points totals
    if(+games[i].split(':')[0] > +games[i].split(':')[1]){
      x += 3;
    }
    else if(+games[i].split(':')[0] < +games[i].split(':')[1]){
      x += 0;
    }
    else{
      x += 1;
    }
  }
  //Return total points after the for loop has completed
  return x;
}
