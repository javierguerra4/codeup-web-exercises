// alert("hello world")

// var flavor = prompt("Welcome to Codeup Ice Cream! What flavor do you want?");

// if (flavor === "chocolate") {
//     alert("One chocolate coming right up!");
// } else if (flavor === "vanilla"){
// } else {
//     alert("We do not have that flavor. Sorry! :(");
// }
//switch
// hey browser, look at the value of the flavor variable
// and switch your response depending on the value
// switch(flavor) {
//     case("chocolate"):
//         alert("")
// }

// function getIceCreamOrder(flavor){
//     if (flavor === "chocolate") {
//         alert("One chocolate coming right up!");
//     } else if (flavor === "vanilla"){
//         alert("One vanilla coming right up!");
//     }
// }


// function getIceCreamOrder(flavor){
//     if (flavor === "chocolate" || flavor === "vanilla"|| flavor === "strawberry"){
//         alert("One" + flavor + " coming right up!");
//     }
// }

// getIceCreamFlavor("chocolate");
//closing a page decision

// var decision = confirm ("Are you sure you want to close this page!");
// alert(decision)
// if (decision === true) {
//     alert("OK, closing the page.....:(");
// }  else {
//     alert("Yay! Keeping page open... :)");
// }

//Both above and below code do the same thing.

// alert( (decision == true)?); ("OK, closing the page.....:(" : "Yay! Keeping page open... :)")


// var num = 10;
// if (num % 5 === 0) {
//     alert("That number is divisible by 5!");
// } else {
//     alert("That number is not divisible by 5!");
// }

// function divisibleByFive(num) {
//     if (num % 5 === 0) {
//         alert("That number is divisible by 5!");
//     } else {
//         alert("That number is not divisible by 5!");
//     }
// }


// function divisibleByFive(num){
//     alert ((num % 5 === 0)? "That number is divisible by 5" : "That number number is not divisible by 5");
// }



// function isDivisibleByFive(num) {
//     if (num % 5 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
//Both of these two functions do the same ting because the browser will return a true or false with an operator.

// function isDivisibleByFive(num) {
//     return num % === 0;
// }

// function isUndefined(input) {
//     if (typeof input === "undefined") {
//         return true;
//     } else {
//         return false;
//     }
// }

// function alertMVPCustomer(totalPurchase){
//     if (totalPurchase > 1000){
//         alert("We have an MVP customer!")
//     } else alert("We don't have an MVP customer");
//
// }

// function alertMVPCustomer(totalPurchase){
//     if (totalPurchase > 1000){
//         return true;
//     } else return false;
//
// }

function isMVPCustomer(totalPurchase){
    return totalPurchase > 1000;

    var totalPurchase = 1000;

    if (isMVPCustomer(totalPurchase)){
        alert("We have an MVP customer!")
    }
}