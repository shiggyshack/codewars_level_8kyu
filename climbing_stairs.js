//Provided an array or arrays, called s, write a function that will find the sum of all values within the nest arrays. Return 20 times that value to represent a predicted 20 year value.
function stairsIn20(s){
  //This will hold our sum
  let one_year_total = 0;
  //If we didn't know how many arrays are in the array s, a nested will loop inside a while loop can be used with counters declared outside and incremented inside.
  let i = 0;
  //As long as the counter is within the length of array s
  while(i < s.length){
    let j = 0;
    //Holds an instance of an array inside array s
    const subArray = s[i];
    //As long as the counter is within the length of instance
    while(j < subArray.length){
      //Keep adding until all elements have been included in the total
      one_year_total += subArray[j];
      //Counter for inner loop incremented
      j++;
    }
    //Counter for outer loop incremented
    i++;
  }
  //Return a 20 multiple of our sum
  return one_year_total*20;
}
