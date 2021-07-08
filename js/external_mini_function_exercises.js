// function returnValue() {
//     return 5;
// }
//
// console.log(returnValue());


// function isFive (x) {
//     return x === 5 || x === "5"
//
// }
// console.log(isFive());

//!!Not working for some reason!!
// function isShortWord(str){
//     return (str.length < 5);
// }
// isShortWord();

// function isSameLength(input1, input2);{
//     return input1 === input2;
// }
//     console.log(isSameLength());


// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.

function getSmallerSegment(aString, aNumber) {
    var lowerCase = aString.substring(0, aNumber);
    return lowerCase.toLowerCase();

}

    console.log(getSmallerSegment("THIS BETTER WORK", 8));
