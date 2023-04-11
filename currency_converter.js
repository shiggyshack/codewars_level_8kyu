//Write a function that accepts a parameter of us dollars and returns the equivalent in another currency.
function usdcny(usd) {
  //This holds the chinese currency with an accepted conversion of 1 usd = 6.75 chinese dollar. This also makes sure to return 2 decimal places only.
  let cy = (usd*6.75).toFixed(2)
  //Return the variable inside of a template literal expression with the unit of currency labeled.
  return `${cy} Chinese Yuan`
}
