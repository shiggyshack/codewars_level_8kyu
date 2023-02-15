//Provided a class Ship constructor, create a method isWorthIt that uses the two parameters of draft and crew to determine a conditional
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

//Since this constructor is written outside the scope of the class constructor, we will use keyword prototype to access the attributes
Ship.prototype.isWorthIt = function(){
  //Returns true if the condition checks after accessing draft and crew values using "this" keyword
  return (this.draft - 1.5*this.crew > 20);
}
