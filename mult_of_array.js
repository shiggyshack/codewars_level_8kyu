//Given an array of integers, return a new array where any element that is a multiple of its index will be added to the new array
function multipleOfIndex(array) {
  //New array
  let nArray = [];
  //For loop to pass through each element on the parameter array
  for(let i = 0; i < array.length; i++){
    //If the element is divisible by its index, add it to the nArray, at the end using .push
    if(array[i]%i==0){
      nArray.push(array[i]);
    }
  }
  //Return the nArray
  return nArray;
}
