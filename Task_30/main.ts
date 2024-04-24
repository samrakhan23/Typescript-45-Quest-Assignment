// Hello Admin:

let userNames: string[]= ["Admin", "Samra", "wasia", "Ramsha"];

for(let users of userNames){
if(users=="Admin")
console.log(" Hello Admin, would you like to see a status report?");
else{
    console.log(` Hello ${users}, thank you for logging in again.`);
}
}

