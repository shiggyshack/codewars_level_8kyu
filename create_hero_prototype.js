//Create a Hero class constructor that creates an instance of the Hero variable given the properties below. If a name isn't passed, store name as "Hero", if a name is passed, store the name property as name.

function Hero (name) {
  //Conditional to check if a name is passed in or not into the constructor prototype
  if(name){
    this.name = name;
  }
  else{
    this.name = 'Hero';
  }
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}
