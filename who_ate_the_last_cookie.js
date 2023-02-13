//Create a function that takes in a data type, and depending on that data type reveals who ate the last cookie

function cookie(x){
  //If 'x' is a string, Zach ate the last cookie
  if(typeof x === 'string'){
    return "Who ate the last cookie? It was Zach!"
  }
  //If 'x' is a float or int, Monica ate the last cookie
  else if(typeof x === 'number'){
    return "Who ate the last cookie? It was Monica!"
  }
  //If 'x' is anything else, the dog ate the last cookie.
  else{
    return "Who ate the last cookie? It was the dog!"
  }
}
