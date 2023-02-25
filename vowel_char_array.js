//Create a function that accepts an array of integers as its parameter. If any of the integer elements in the array have a characterCode of a lower case vowel, then replace the integer with the corresponding vowel and return the new array.
function isVow(a){
  //Use a for loop to pass through, and check, the characterCode of each integer element in the array
  for(let i = 0; i < a.length; i++){
    //Store the instance of the characterCode pulled individually from the array
    let characterCode = String.fromCharCode(a[i]);
    //Use the OR conditional below to check if the returned value is equal to any of the five lowercase vowels.
    if(characterCode === 'a'
      || characterCode === 'e'
      || characterCode === 'i'
      || characterCode === 'o'
      || characterCode === 'u'){
      //If so, overwrite the element in the array
      a[i] = characterCode
    }
  }
  //Return the array after the adjustments are made.
  return a;
}
