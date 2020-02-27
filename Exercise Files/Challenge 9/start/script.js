/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/

"use strict";

var obj = {
  x: 5,
  y: 20,
  z: 3
};

// Write mult() function here
const multiply = (ter) => {
  const { x, y, z } = ter;
  return x * y * z;
}

console.log(multiply(obj));
// 300
