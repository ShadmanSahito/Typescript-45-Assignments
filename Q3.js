"use strict";
/*Question:03
Name Cases: Store a persons name in a variable, and then print that persons name in lowercase, uppercase,
and titlecase.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let personName = ("shadmaan");
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1));