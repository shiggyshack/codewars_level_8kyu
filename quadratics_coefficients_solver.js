//Create a function, accepting two parameter which are real solutions to a quadratic equation, find the values of the linear and constant coefficients in the standard form of a quadratic fucntion f(x)=ax^2+bx+c. Since infinite solutions exist for each problem, let's retrict a = 1.
function quadratic(x1, x2){
  //The solutions when placed into the factored form would be in their additive inverses.
  //The constant term is the product of the roots.
  let c = (-x1)*(-x2)
  //The linear tearms coefficient is the sum of the roots.
  let b = (-x1) + (-x2);
  //Return in an arrray, again a = 1.
  return [1, b, c];
}
