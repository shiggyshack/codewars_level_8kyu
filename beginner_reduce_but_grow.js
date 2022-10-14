// DESCRIPTION:

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    let prod = 1
    //Iterate through every element in a non-empty array and multiply each element's value to gain a final product
    for (let i = 0; i < x.length; i++){
      prod *= x[i]
    }
    //Return the product after reaching the last element in the array
    return prod
  }

