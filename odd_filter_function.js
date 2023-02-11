//Using an arrow function, return an array from a values array that only gives back the odd integers
function odds(values){
  //Filter method here will test to see if the element modulos 2 is not equal to 0 (meaning there was a remainder/meaning it was an odd integer)
  return values.filter(el => el%2 != 0);
}
