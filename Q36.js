"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Question:36
T-Shirt:
Write a function called make_shirt() that accepts a size and the text of a message that should be printed on
the shirt. The function should print a sentence summarizing the size of the shirt and the message printed
on it. Call the function.
*/
//@ts-ignore
function make_shirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt("Large", "Love is Life");
