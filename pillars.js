//Create a function, that accepts three parameters: number of pillars, distance between pillars(meters), and width of an individual pillar(centimeters), and returns the distance from the first to last pillar not including the width of those two pillars.
function pillars(numPill, dist, width) {
  //If there are two or more pillars, this formula will return the distance between the two ends
  if(numPill >= 2){
    return (numPill-2)*width + (numPill-1)*dist*100
  }
  //If there is only one pillar return 0
  else if(numPill == 1){
    return 0;
  }
  else{
    return width;
  }
}
