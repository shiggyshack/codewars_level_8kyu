//Create a function that verifies that the volume of a cube would be formed by sides of length s, if not true, return false.
var cubeChecker = function(volume, side){
  return Math.pow(side, 3) === volume && side > 0;
};
