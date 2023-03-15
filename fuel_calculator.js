//Create a function, which accepts two parameters: one is the number of litres of fuel you are getting, and the other is the pricePerLitre, return the total cost of the fuel trip where a discount is applied to every 2 gallons, up to 10 gallons, or .05 cents off per litre.
function fuelPrice(litres, pricePerLitre){
  //If a purchase is above 10 litres, apply a 0.25 cent discount per litre.
  if(litres >= 10){
    //The total cost dependant upon the amount of litres purchased
    let ans = litres*(pricePerLitre-0.25);
    //Cast the ans to a number after the .toFixed(2) method is used to round to two decimal places.
    return +ans.toFixed(2);
  }
  else{
    //The total cost dependant upon how many litres are purchased based off multiples of two.
    let ans = litres*(pricePerLitre-.05*(Math.floor(litres/2)));
    //Cast teh ans to a number after the .toFixed(2) method is used to round to two decimal places.
    return +ans.toFixed(2);
  }
}
