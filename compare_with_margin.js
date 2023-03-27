//Create a function, accepting two (sometimes three parameters), and determine how a and b relate to each other. Return 0 if they are within a margin's distance from each other, return a 1 if a is greater than b, and return  -1 if a is less than b.
function closeCompare(a, b, margin = 0){
  if(Math.abs(a - b) <= margin){
    return 0;
  }
  
  if(a < b){
    return -1;
  }
  
  if(a > b){
    return 1;
  }
  
}
