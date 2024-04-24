// No Users: 

let userNames:string[]= ["Admin", "Samra", "wasia", "Ramsha"];

if (userNames.length === 0){
    console.log("We need to find some users")
}
else{

    for (let val of userNames){
if(val === "Admin"){
    console.log("Hello Admin, would you like to see a status report?")
}
else{
    console.log(`Hello ${val}, thank you for logging in`)
}
    }
}


userNames = [];

if(userNames.length == 0){
console.log("We need to find some users!");
}










