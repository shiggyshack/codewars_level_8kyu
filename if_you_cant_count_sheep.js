// DESCRIPTION:

// If you can't sleep, just count sheep!!

// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    //Given a non-negative integer as a parameter, return a string murmur...
    let str = ''
    for(let i = 1; i <= num; i++){
      //Cast the value of i to a string and concatenate with ' sheep...'
      str += String(i) + ' sheep...'
    }
    //Return the string created from the for loop
    return str
  }