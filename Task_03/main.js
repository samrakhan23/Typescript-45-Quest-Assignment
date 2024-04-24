// lowerCase:
var fullName = "Samra khan";
console.log(fullName.toLowerCase());
// UpperCase:
console.log(fullName.toUpperCase());
// TitleCase:
console.log(fullName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
