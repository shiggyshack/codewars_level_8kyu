// DESCRIPTION:

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
    //create a new array to hold the additive inverse values
    let newArr = []
    for (let i = 0; i < array.length; i++){
      //pull elements from old array and update the index in the newArr
      newArr[i] = -array[i]
    }
    //return newArr
    return newArr;
  }
  