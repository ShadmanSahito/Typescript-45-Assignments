/*Question:42
Great Magicians:
Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the
array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that
the list has actually been modified.
*/

let Magicians: string[] = ["Arslan", "Ahad", "Azaan"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(Magicians);

function make_Great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_Great(Magicians); // Modifies the original array
show_magicians(Magicians); // Shows modified names