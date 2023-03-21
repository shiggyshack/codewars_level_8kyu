//Create a function, that accepts two values of an variable monomial expression: the coefficient and the exponent, and return the integral value of that monomial expression. To find the integral one would increase the exponent by one and divide the old coefficient by the new exponent.
function integrate(coefficient, exponent) {
  //Update the new exponent and coefficient using the rule described and wrap them as a string value.
  let exp = String(exponent+1)
  let coe = String(coefficient/exp)
  //Return those values within a literal expression.
  return `${coe}x^${exp}`
}
