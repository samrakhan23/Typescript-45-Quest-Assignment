"use strict";
// Shrinking Guest List:
// part 1
let dinnerList = ["apana", "hadia", "zoya", "wasia", "ramsha", "zubia"];
for (let val of dinnerList) {
    console.log(`${val}, I can invite only two people for dinner`);
}
// // // part 2
while (dinnerList.length > 2) {
    let remove = dinnerList.pop();
    console.log(`sorry ${remove}, i can invite only two people`);
}
// // // part 3
for (let people of dinnerList) {
    console.log(`${people}, you are invited to the dinner`);
}
// // // part 4
dinnerList.pop();
dinnerList.pop();
console.log("Final list = ", dinnerList);
