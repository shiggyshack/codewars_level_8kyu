//Complete a method in the God class that creates an array with two objects that are both subclasses of Human class
class God{
  //method that doesn't need an instance of the God class
  static create(){
    //returns an array where the 0 index is a new instance of Man and the 1 index is a new instance of the Woman class
    return [new Man, new Woman]
  }
}
//creates the Human class and extends Man and Woman separately from that class
class Human{}
class Man extends Human{}
class Woman extends Human{}
