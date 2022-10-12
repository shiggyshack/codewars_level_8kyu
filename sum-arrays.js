// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

function sum (numbers) {
   //initialize our sum variable
    let sum = 0;
   //create a FOR LOOP that iterates through each element in the array and updates the sum var
    for(let i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }
  //after exiting the FOR LOOP, the sum variable is returned from the function call
  return sum;
};