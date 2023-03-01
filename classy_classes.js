//Given a class of Person, create a constructor that takes in two parameters of name and age, then create a get method called 'info' that will return a statement with the person's name and age entered.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  get info(){
    return `${this.name}s age is ${this.age}`
  }
  
}
