//Create a function, that accepts a string as a parameter, and if the string ends with a '?', do nothing but return the string; otherwise, return the string with a '?' appended on the end.
function ensureQuestion(s) {
  //Checking to see if a '?' is found, if so, return s.
  if(s.indexOf('?') !== -1){
     return s;
  }
  //Otherwise, place a '?' on the end of the string.
  else{
    return `${s}?`
  }
}
