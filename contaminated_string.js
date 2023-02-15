//Create a function that takes in a text and a single or empty character. The function will overwrite the text to be only the single or empty character.
function contamination(text, char){
  //If the text or character is an empty string, return an empty string
  if(text == '' || char == ''){
    return '';
  }
  //Else compute the length of the string
  else{
    let n = text.length;
    let nNew = '';
    for(let i = 0; i < n; i++){
      //Update a new string with the same length as text, but to only include the char repeated
      nNew += char;
    }
    //Return the new string
    return nNew;
  }
}
