// lowerCase:

let fullName: string = "Samra khan";
console.log(fullName.toLowerCase());


// UpperCase:

console.log(fullName.toUpperCase());


// TitleCase:
console.log(fullName.replace(/\b\w/g,c=> c.toUpperCase()));


