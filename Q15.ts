/*Question:15
Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the
name of the guest who can’t make it.
*/

let guestList: string[] = ["Arslan", "Ahad", "Azaan"]
    guestList.forEach(guest => 
        {
    console.log(`Dear ${guest},
     would you like to join me for dinner?` )
    }
    )

let unableToAttend = "Arslan";
console.log(`Unfortunately!  Dear ${unableToAttend} can't make it to dinner.`);

// Replace the guest

let newGuest = "Karam";
guestList[guestList.indexOf(unableToAttend)] = newGuest;


// New invitations
console.log("New List of Invitation!")
guestList.forEach(guest => {
    console.log(`Dear ${guest}, 
    would you like to join me for dinner?`);
});