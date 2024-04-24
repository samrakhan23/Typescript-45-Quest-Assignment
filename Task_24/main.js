"use strict";
// More Conditional Tests:
// equality and inequality with strings
let color_1 = "red";
let color_2 = "black";
console.log(color_1 == color_2);
console.log(color_1 != color_2);
//  lower case function
let Name_1 = "Samra Khalil";
let Name_2 = "samra khalil";
console.log(Name_1.toLowerCase() == Name_2);
console.log(Name_1.toLowerCase() != Name_2);
//  Numerical tests involving equality and inequality
let number_1 = 20;
let number_2 = 25;
console.log(number_1 === number_2);
console.log(number_1 !== number_2);
console.log(number_1 > number_2);
console.log(number_1 < number_2);
console.log(number_1 >= number_2);
console.log(number_1 <= number_2);
// "and" and "or" operators
let x = 10;
let y = 20;
let z = 30;
console.log(x > y && y > z);
console.log(x < y && y < z);
console.log(x < y && y > z);
console.log(x > y || y < z);
console.log(x > y || y > z);
console.log(x < y || y < z);
// item is in a array
let colors = ["red", "yellow", "green", "black", "white"];
console.log(colors.includes("golden"));
console.log(!colors.includes("golden"));
console.log(colors.includes("black"));
console.log(!colors.includes("black"));
