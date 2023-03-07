//Create a function, taking in two parameters, that returns either the message 'string' or 'number' depending on what is passed in.

function typeOfSum(a, b) {
  //Both numbers as parameters, return number
  if(typeof a === 'number' && typeof b === 'number'){
    return 'number'
    //Either parameter a string, return string
  }else if(typeof a === 'string' || typeof b === 'string'){
    return 'string'
    //If no string, and one was a number, return number
  }else if(typeof a === 'number' || typeof b === 'number'){
    return 'number'
    //Otherwise, return number
  }else{
    return 'number'
  }
}
