"use strict";
// Great Magicians:
let magiciansNames = ["Ali", "Babar", "Apana", "Zubia"];
function make_great(greet) {
    for (let val of magiciansNames) {
        console.log(greet, val);
    }
}
make_great("The great");
