//Create a function, accepting 3 parameters, and returning a true or false value depending on if you have enough gas to make it to the fuel pump
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //mpg*fuelLeft will tell you how many miles you can drive and subtracting distanceToPump will return, hopefully a non-negative value (return true)
  return (mpg*fuelLeft-distanceToPump) >= 0 ? true : false;
};
