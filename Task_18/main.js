"use strict";
// Seeing the World: 
// part 1
let places = ["Saudia", "Dubai", "Kashmir", "Paris", "Canada"];
// // part 2
console.log("orginal order =", places);
// // part 3
console.log("alphabetical order = ", [...places].sort());
// // // part 4
console.log("orginal order =", places);
// // // part 5
console.log("reverse order = ", [...places].sort().reverse());
// // // part 6
console.log("orginal order =", places);
// // // part 7
places.reverse();
console.log("reverse order = ", places);
// // // part 8
places.reverse();
console.log("back to original order = ", places);
// // // part 9
places.sort();
console.log("sorted array = ", places);
// // // part 10
places.reverse();
console.log("reverse alphabetical order = ", places);
