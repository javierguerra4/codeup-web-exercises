(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
        first: "Javier",
        last: "Guerra",
    }
        ;
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
// console.log("Hello from" + " " + person[0].first + " " + person[0].last);
    person.sayHello = function() {
        return "Hello from" + person.firstName + " " + person.lastName;
    };
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {
            name: 'Cameron',
            amount: 180},
        {
            name: 'Ryan',
            amount: 250},
        {
            name: 'George',
            amount: 320}
    ];
    // shoppers.forEach(function (shopperDiscount) {
    //     if (shopperDiscount.amount > 200) {
    //     return ((shopperDiscount.amount * .12) - shopperDiscount);
    //         console.log(shopperDiscount.name + "spent" + shopperDiscount.amount );
    // } else  {
    //     return ("Not enough for discount");}
    //     // console.log(shopperDiscount.name + "spent" + shopperDiscount.amount );
    // });
    // for (var i = 0; i < shoppers.length; i += 1) {
    //
    // }


    for (var i = 0; i < shoppers.length; i += 1) {
        var discountedAmount = calculateDiscount(shoppers[i].amount, discountThreshold, discountPercentage);
        var output = shoppers[i].name + ' is purchasing ' + shoppers[i].amount +
            ' of stuff. He will get ' + discountedAmount +
            ' off the purchase and pay ' +
            (shoppers[i].amount - discountedAmount) + '.';
        console.log(output);
    }
    
    //*********************We refactored to a forEach loop by changing 'shoppers' to 'shopper'. We also removed all the [i].
    shoppers.forEach(function(shopper);
    for (var i = 0; i < shoppers.length; i += 1) {
        var discountedAmount = calculateDiscount(shopper.amount, discountThreshold, discountPercentage);
        var output = shopper.name + ' is purchasing ' + shopper.amount +
            ' of stuff. He will get ' + discountedAmount +
            ' off the purchase and pay ' +
            (shopper.amount - discountedAmount) + '.';
        console.log(output);
    }
    //*********************
    //**INSTRUCTOR EXAMPLE**
    // function calculateDiscount(amount, threshold, discountPercentage) {
    //     if (amount <= threshold){
    //         return 0
    //     } else {
    //         return amount * discountPerscentage;
    //     }
    //
    // }
    // calculateDiscount(180, 200, .12);
    // calculateDiscount( 250, 200, .12);
    // calculateDiscount( 320, 200, .12);
    //
    // var output1 = 'Cameron is purchasing' + shoppers[0].amount + ' of stuff. He will got ' +
    //
    // console.log(output1);


    // console.log(shoppers.name + "spent" + shoppers.amount );
// hourlyWeather.forEach(function(hourlyForecast){
//     console.log("At " + hourlyForecast.time + " the temperture will be " + hourlyForecast.temp + " and feel like " + hourlyForecast.feels_like);
// };


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "Ready Player One",
            author: {
                firstName: "Ernest",
                lastName: "Cline"
            }
        },
        {
            title: "Into the Wild",
            author: {
                firstName: "Jon",
                lastName: "Krakauer"
            }
        },
        {
            title: "The Call of the Wild",
            author: {
                firstName: "Jack",
                lastName: "London"
            }
        },
        {
            title: "The Hobbit",
            author: {
                firstName: "John",
                lastName: "Tolkien"
            }
        },
        {
            title: "Animal Farm",
            author:{
                firstName:"George",
                lastName: "Orwell"
            }
        }

    ]
        console.log(books[0].title)
        console.log(books[0].author.firstName)
        console.log(books[0].author.lastName)


    // var cars = [
    //     {
    //         make: "Toyota",
    //         model: "Camry",
    //         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
    //         owner: {
    //             name: "Jane Doe",
    //             age: 30
    //         }
    //         ]





    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(bookInfo){
        console.log("Book title is " + bookInfo.title + " written by " + bookInfo.author.firstName + " " + bookInfo.author.lastName);
    });



// hourlyWeather.forEach(function(hourlyForecast){
//     console.log("At " + hourlyForecast.time + " the temperture will be " + hourlyForecast.temp + " and feel like " + hourlyForecast.feels_like);
// });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
