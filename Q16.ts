/*Question:16
More Guests:
You just found a bigger dinner table, so now more space is available. Think of three more guests to invite
to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/

    let guestList: string[] = ["Karam","Ahad","Azaan"];
    console.log("New List of Invitation!")
    guestList.forEach(guest => 
    {
    console.log(`Dear ${guest}, 
    would you like to join me for dinner?`);
    }
    );

    console.log
    ("Great news! I have found a bigger dinner table!");
    console.log
    ("So our new Guests are");

// Adding more guests
    guestList.unshift("Waheed");
    guestList.splice(guestList.length / 2, 0, "Shahid");
    guestList.push("Shahrukh");

    guestList.forEach(guest => 
    {
    console.log(`Dear ${guest}, 
    would you like to join me for dinner?`);
    }
    );