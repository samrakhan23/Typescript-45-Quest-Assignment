"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["admin", "Samra", "wasia", "Ramsha", "Ali"];
let new_users = ["admin", "samra", "Ayesha", "Hadia", "Dua"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let val of new_users) {
    if (current_users_lower.includes(val.toLowerCase())) {
        console.log(`Sorry ${val} has been taken`);
    }
    else {
        console.log(`${val} is available`);
    }
}
