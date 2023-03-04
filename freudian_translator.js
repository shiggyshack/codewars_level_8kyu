//Create a function, that when given a string of words, will replace each word with the word 'sex'. If the string is empty, return an empty string.
function toFreud(string) {
  if(string === ''){
    return '';
  }
  //Turn the string into an array of individual words
  string = string.split(' ');
  //This is the new array that will hold the same number of words as string array has
  let sexString = []
  //For each element in string array, place the same number of occurences of the word 'sex' in sexString array
  for(let i = 0; i < string.length; i++){
    sexString[i] = 'sex'
  }
  //Join the elements in sexSting with a space between each word and return
  return sexString.join(' ');
}
