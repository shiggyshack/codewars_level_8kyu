// DESCRIPTION:

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++){
      //conditional used to check each element in the array and return the index position if found
        if(haystack[i] === 'needle'){
        return "found the needle at position " + i      
      }
    }
    //if the conditional is never true, the message is return stated so
    return "Your function didn't return anything"
  }