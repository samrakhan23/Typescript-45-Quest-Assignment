"use strict";
// More Guests:
// part 1
let dinnerList = ["hadia", "wasia", "ramsha"];
for (let val of dinnerList) {
    console.log(`${val}, i found a bigger dinner table, so i am inviting more people`);
}
;
// part 2
dinnerList.unshift("apana");
console.log(dinnerList);
// part 3
dinnerList.splice(1, 0, "zoya");
dinnerList.push("zubia");
console.log(dinnerList);
for (let val of dinnerList) {
    console.log(`${val}, You are invited to the dinner`);
}
