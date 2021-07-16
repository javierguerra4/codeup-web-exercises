// let count = 2;
// while (count < 65537) {
//     console.log(count);
//     count *=2;
// }

// INSTRUCTOR SOLUTION
// var num = 2
// while (num < 70000) {
//     console.log(num);
//     num *=2;
// }

//DO WHILE LOOP EXERCISE
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;


// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//     var conesLeft = allCones - conesSold;
//
//     console.log("There are " + conesLeft + " cones left");
// }
// while (conesLeft <= 1 );
//
// //remember the break helps
//
// //INSTRUCTOR SOLUTION
//
//
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesBeingBought = Math.floor(Math.random() * 5) + 1;
//     if (conesBeingBought > allCones){
//         console.log("Cannot sell you " + conesBeingBought + "I only have "
//         + allCones);
//     }   else {
//         console.log(conesBeingBought + " cones solde..." + allCones + "cones" +
//             "left");
//             allCones = allCones - conesBeingBought;
//     }
//
// } while (allCones > 0);
// console.log("Yay! I sold them all!");
