//Write a Ghost class that creates an instance of the object without accepting any parameters and updates the color paramter to one of four colors randomly.
var Ghost = function() {
    let arr = ['white', 'yellow', 'purple', 'red'];
    let ran =  Math.floor(Math.random()*4);
    this.color = arr[ran];
};
