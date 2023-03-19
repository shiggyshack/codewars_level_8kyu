//Write a function, that given a dolls array of strings, iterates through the list and takes the first three occurences of "Hello Kitty" or "Barbie doll", adds them to a new array, and then returns that array.
function grabDoll(dolls){
  //This new array will hold at most 3 instances of "Hello Kitty" and/or "Barbie doll"
  var bag=[];
  //Using a for loop to iterate through the dolls array.
  for(let i = 0; i < dolls.length; i++){
    //Checks the current value of the element in the dolls array.
    if(dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll'){
      //Pushes that value to the new array bag
      bag.push(dolls[i]);
      //Breaks once bag has 3 elements
      if(bag.length == 3){
      break;
      }
    }
    //Continues the search in the dolls array
    continue;
  }
  //Returns the contents of bag once the loop is complete or 3 elements have been pushed to bag array.
  return bag;
}
