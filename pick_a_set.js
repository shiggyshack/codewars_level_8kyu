//Create a function, which accepts two parameters, an array and an integer value. The function will return the first n elements of the array. If no value is entered for n, then it will run as a 1. If n = 0, then an empty array will be returned.
function first(arr, n) {
  //First conditional checks to see if an empty array needs to be returned.
  if(n === 0){
    return []
  }
  //If n is present, use .slice to return a portion of the array up to index n.
  else if (n){
    return arr.slice(0,n)
  }
  //Otherwise return only the first element.
  return arr.slice(0,1)
}
