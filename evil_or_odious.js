//Create a function, that accepts a number in base 10, converts it to binary and counts the occurences of 1s in the binary representation. If the number is an even number of 1s, return "It's Evil!"; otherwise, return "it's Odious!".
function evil(n) {
  //.toString(2) will convert the number to base 2 (binary)
  let binary = n.toString(2);
  //.split('') will turn the number into an array of strings
  binary = String(binary.split(''));
  //Our counter is established that will be incremented inside the for loop if certain conditions are met.
  let count = 0;
  for(let i = 0; i < binary.length; i++){
    //Check the individual elements to see if they are strictly equal to '1', update the counter if they are.
    if(binary[i] === '1'){
      count++
    }
  }
  //Conditionals checking the value of the counter and printing out a different message depending on even versus odd.
  if(count%2 ===0){
    return "It's Evil!"
  }
  else{
    return "It's Odious!"
  }
}
