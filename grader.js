//Create a function, that accepts a score of an assignment, and returns the letter grade associated with that number value. Use conditional logic of ifs, else ifs, and else to sort the grades.
function grader(score) {
  if(score > 1 || score < 0.6){
    return "F"
  }else if(score >= 0.9){
    return "A"
  }else if(score >= 0.8){
    return "B"
  }else if(score >= 0.7){
    return "C"
  }else{
    return "D"
  }
}
