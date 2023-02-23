//A store is running a "3 for the price of 2" discount, create a function that will calculate the total cost based on the quantity purchased and the price per unit. 

function mango(quantity, price){
  //If the customer is NOT purchasing 3 or more, they are not taking advantage of the discount and will be charged quantity*price per unit
  if(quantity < 3){
    return quantity*price;
  }
  //If the customer is taking FULL advantage of the promotion, they will purchase as multiple of 3, therefore the cost will be quantity/3 * 2 * price per unit
  else if(quantity % 3 == 0){
    return quantity/3*2*price;
  }
  //Otherwise, some of the purchase will have the promotion applied, but the remainder (portion not a multiple of 2 will have the full unit price applied)
  else{
    return (Math.trunc(quantity/3))*2*price + (quantity%3)*price; 
  }
}
