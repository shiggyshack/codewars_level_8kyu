//Create a function, that accepts an array of 3 integers, and determines if the values would make the pythagorean theorem (a^2+b^2=c^2 true.
function isPythagoreanTriple(integers) {
  //Use .sort to get the integers in order from least to greatest.
  integers = integers.sort((a,b) => a-b)
  //Create 3 variables to hold the lengths squared.
  let a = Math.pow(integers[0],2)
  let b = Math.pow(integers[1],2)
  let c = Math.pow(integers[2],2)
  //Test to see if the sum of the two smaller squares is equal to the third side squared.
  return (a+b === c)
}
