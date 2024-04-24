"use strict";
// Changing Guest List:
// part 1
let dinnerList = ["samra", "wasia", "ramsha"];
let canNotAttend = "samra";
console.log(`${canNotAttend} can not attend the dinner`);
// // part 2
let newList = dinnerList.splice(0, 1, "hadia");
console.log(dinnerList);
// // part 3
let msg = "You are invited to the dinner";
for (let val of dinnerList) {
    console.log(`${val}, ${msg}`);
}
