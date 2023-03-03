//Create a function that accepts a year as a parameter and returns which century that year belongs too...be careful of edge cases 1800 is still considered 18th century
function century(year) {
  //If the number has no remainder when divided by 100, then that is the century
  if(year%100===0){
    return Math.floor(year/100);
  }
  //Otherwise, you would take the floor of the division and increment by 1 to get the century.
  return Math.floor(year/100) + 1;
}
