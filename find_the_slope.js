//Create a function, that accepts an array of four integers, where they represent two points on (x1,y1) & (x2,y2) on a coordinate plane. Return the slope between the two points as a string.
function slope(points)
{
  //If the two x-values are equal the slope will be 'undefined' since you cannot divide by 0.
  if(points[2] === points[0]){
    return 'undefined';
  }
  //If the two y-values are equal the slope will be '0'.
  else if(points[3] === points[1]){
    return '0';
  }
  //All other cases will use the formula below, created as a new variable, and cast as a string before it is returned.
  else{
    let val = (points[3]-points[1])/(points[2]-points[0])
    return String(val);
  }
}
