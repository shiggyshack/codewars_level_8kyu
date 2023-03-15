//Create a function, accepting a boolean and two other functions. If the boolean evaluates to truthy, pass it into func1, otherwise; pass the boolean into func2.
function _if(bool, func1, func2) {
  if(bool){
    func1(bool)
  }
  else{
    func2(bool)
  }
}
