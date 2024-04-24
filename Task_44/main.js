"use strict";
// Sandwiches:
Object.defineProperty(exports, "__esModule", { value: true });
function mySandwich(...items) {
    return `I want ${items} sandwich`;
}
let sandwich1 = mySandwich("cheese", "veg", "chicken");
console.log(sandwich1);
let sandwich2 = mySandwich("BBQ", "mayo");
console.log(sandwich2);
let sandwich3 = mySandwich("chilli cheese", "cream", "fresh");
console.log(sandwich3);
