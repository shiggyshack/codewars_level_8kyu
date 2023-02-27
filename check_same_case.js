//Create a function, that accepts two characters, and determines if the two characters are the same case of not. Return 1 if they are of the same case, 0 if they are not the same case, and -1 one or both of them are not characters at all.
function sameCase(a, b){
  //Using a regex, return if either a or b is not a match for a character, and that will trigger the return value of -1.
  if (!a.match(/[a-zA-Z]/) || !b.match(/[a-zA-Z]/)) {
    return -1;
  //Cast a to UpperCase and compare with original a, and cast b to UpperCase and compare to original, if these booleans are both true, or both false, then a true will be returned, and that will trigger a return value of 1.
  } else if ((a === a.toUpperCase()) === (b === b.toUpperCase())) {
    return 1;
  //Else return 0 meaning the two characters were not the same case
  } else {
    return 0;
  }
}
