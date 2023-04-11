//Create a function, accepting two parameters, that returns the total cost to display your name on a billboard. The first parameter is your name, letters and spaces cost, and the second parameter is how much each space and letter cost. This coding challenge also required solving the problem without using the '*' operator.
function billboard(name, price = 30){
  //Separate the string into an array or characters and spaces.
  name = name.split('')
  //Initialize a cost variable to track the total price after the array is traced.
  let cost = 0
  //Use a for loop and increment the cost by price for each element in the name array.
  for(let i = 0; i < name.length; i++){
    cost += price;
  }
  //Return the total cost calculated.
  return cost
} 
