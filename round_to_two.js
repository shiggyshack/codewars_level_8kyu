//Create a function that takes a float value as a parameter and rounds the number to two decimal places
function twoDecimalPlaces(n) {
  //Method toFixed is applied to the float value and then cast as an int using the '+'
  return +n.toFixed(2);
}
