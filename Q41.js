"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Question:41
Magicians:
Make an array of magician’s names. Pass the array to a function called show_magicians(), which prints the
name of each magician in the array.
*/
let Magicians = ["Arslan", "Ahad", "Azaan"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(Magicians);
