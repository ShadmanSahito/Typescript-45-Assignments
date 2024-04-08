"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Question:43
Unchanged Magicians:
Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’
names. Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with
the Great added to each magician’s name.
*/
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
let magicians = ["Arslan", "Ahad", "Azaan"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    }); //@ts-ignore
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
