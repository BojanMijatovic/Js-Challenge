/* CHALLENGE 10 - Destructuring and Rest Operator

Assign values to the a, b, c variables
using destructuring and rest operator.
*/

"use strict";

// var a, b, c;

const a = [1];
const b = [2];
const c = [3, 4, 5, 6, 7];

var arr = [...a, ...b, ...c];

// Write code here

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]
