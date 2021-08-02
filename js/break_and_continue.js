'use strict'

var userInput = prompt("Please enter an odd number between 1-50.")

while (parseFloat(userInput) >= 50 || parseFloat(userInput) % 2 === 0){
    prompt("That's not an odd number or a number between 1 and 50! Try again.");
    userInput++;
    if (parseFloat(userInput) < 50 || (parseFloat(userInput) % 2) !== 0){
        break;
    }
}

