//Create a function, when provided the number of points scored and the amount of time played, will extrapolate that information to return how many points might be scored if someone was to play the full 48 minutes in a basketball game.
function pointsPer48(ppg, mpg) {
  //If no minutes recored, return 0 points
  if(mpg === 0){
    return 0;
  }
  //Otherwise, use the formula below to extrapolate how many points would be scored and use Math.round(10*X)/10 to round to the tenths decimal place.
  else{
    return Math.round(10*ppg*(48/mpg))/10;
  }
}
