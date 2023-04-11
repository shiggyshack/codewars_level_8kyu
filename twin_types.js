//Create a function accepting two parameters, a variable and a variable type as a string, and return true if the two parameters agree and false if they disagree.
function typeValidation(variable, type) {
  //typeof applied to our variable parameter will return 'number' or 'string'
  if(typeof variable === type){
    return true;
  }
  //This conditional catches if the typeof and type are not in agreement.
  else
    return false
}
