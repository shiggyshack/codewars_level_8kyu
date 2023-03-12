//Create a function, that accepts a string as a parameter, and returns the sum of the character's codes in the string.
function uniTotal (string) {
  //This variable will hold the sum
  let sum = 0;
  //This for loop will pull the character code for each element in the string and sum them.
  for(let i = 0; i < string.length; i++){
    //Update the sum variable.
    sum += string.charCodeAt(i);
  }
  //Return the sum
  return sum;
}
