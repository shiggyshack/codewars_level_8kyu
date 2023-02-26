//Create a function that passes in an array as a parameter, places it in descending order, and then will return the difference of all the elements from 0 index to arr.length-1 index.
function sumOfDifferences(arr) {
  // sort array in descending order
  arr.sort((a, b) => b - a); 
  //Create the variable to hold the sum of all of the differences
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    //Update the sum variable as you iterate through each pair of elements in the array up until the arr.length - 2 element
    sum += arr[i] - arr[i+1];
  }
  //Return that sum value
  return sum;
}
