//Create a function that takes in a number as the base and a power that represents the number of times the number is multiplied by itself, don't use .pow or other built-in methods
function numberToPower(number, power){
  //Create a value variable to return the expanded product
  let value = 1;
  //Only enter the while loop if the power is greater than 0
  while(power > 0){
    //Update the value by multiplying by the number
    value *= number;
    //Decrease the power by 1 and the while loop will happen again if power is still greater than 0
    power--;
  }
  //Return the value after being multiplied by the number, power times.
  return value;
}
