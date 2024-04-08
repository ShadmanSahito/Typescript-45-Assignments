"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Question:29
Favorite Fruit:
Make an array of your favorite fruits, and then write a series of independent if statements that check for
certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
is in your array, the if block should print a statement,
such as You really like bananas!
*/
let favorite_fruits = ["Water Melon", "Grapes", "Mangoes"];
if (favorite_fruits.includes("Mangoes")) {
    console.log("You really like Maongoes!");
}
if (favorite_fruits.includes("Water Melon")) {
    console.log("You really like Water Melon!");
}
