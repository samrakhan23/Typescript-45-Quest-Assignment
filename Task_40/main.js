"use strict";
// Album:
function make_album(Artist, Title, numberOfTracks) {
    return { Artist, Title, numberOfTracks };
}
let album1 = make_album("Atif Aslam", "Mosam", 3);
let album2 = make_album("Irtiza Khan", "Yaariyan", 7);
let album3 = make_album("Haya Ali", "Mera Asmaan");
console.log(album1);
console.log(album2);
console.log(album3);
