//Create a function, that accepts an array and a value as parameters, and returns true if the array contained the value, and false if it did not. Do this without using a loop to traverse the array.
function check(a,x){
  //Conditional (Ternary) operator notation is used here to evaluate using .indexOf method that returns -1 if the element is NOT present in the array.
  return (a.indexOf(x) !== -1 ? true : false)
}
