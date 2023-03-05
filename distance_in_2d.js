//Create a function, taking two Point objects as parameters, that will find the distance between the two points on a coordinate plane. The Point objects have attributes x and y which represent the values of those ordered pair values.
function distanceBetweenPoints(a, b) {
  //The distance between any two points on a Cartesain Plane is d = sqrt((x2-x1)^2+(y2-y1)^2) which is derived from the Pythagorean Theorem
  return Math.sqrt((a.x - b.x)**2+(a.y - b.y)**2)
}
