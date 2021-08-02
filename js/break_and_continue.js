'use strict'

// var userInput = prompt("Please enter an odd number between 1-50.")
//
// while (parseFloat(userInput) >= 50 || parseFloat(userInput) % 2 === 0){
//     prompt("That's not an odd number or a number between 1 and 50! Try again.");
//     userInput++;
//     if (parseFloat(userInput) < 50 || (parseFloat(userInput) % 2) !== 0){
//         break;
//     }
// }




var userInput = prompt("Please enter an odd number between 1-50.")

while (parseFloat(userInput) >= 50 || parseFloat(userInput) % 2 === 0){
    prompt("That's not an odd number or a number between 1 and 50! Try again.");
    userInput++;
    if (parseFloat(userInput) < 50 || (parseFloat(userInput) % 2) !== 0){
        continue;
    }
console.log('Number to skip is ' + userInput);
}

// var chooseNumber = prompt("Enter number between ");
// var breakNumber= '';
// for (i = 1; 1 < 50; i += 2) {
//     // var chooseNumber = prompt("Enter number");
//     if (chooseNumber % 2 === 0) {
//         alert("That is not ");
//         console.log("That is not")
//     }
//     if (chooseNumber > 50) {
//         alert("over 50 ");
//         console.log("over 50")
//     }
//     if (chooseNumber === "31") {
//         console.log("Yikes")
//         alert("Yikes bad number")
//         continue;
//     }
//     breakNumber = breakNumber + " " + chooseNumber;
//     console.log("You chose the number: " + chooseNumber);
//
// }


// var chooseNumber = prompt("Enter an odd number between 1-50");
// var breakNumber = '';
// for ( var i = 1; 1 < 50; i+=2) {
//     // var chooseNumber = prompt("Enter an odd number between 1-50");
//     if (chooseNumber % 2 === 0) {
//         alert("That is not an odd number");
//         console.log("That is not an odd number")
//         continue;
//     }
//     if (chooseNumber > 50) {
//         alert("That number is over 50");
//         console.log("That number is over 50")
//         continue;
//     }
//     if (chooseNumber === "31") {
//         console.log("Yikes skipping number")
//         alert("Yikes skipping number")
//         continue;
//     }
//     breakNumber = breakNumber + " " + chooseNumber;
//     console.log("You chose the number: " + chooseNumber);
//
// }

