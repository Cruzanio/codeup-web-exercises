// "use strict";
//
// console.log("hello from conditionals lec.js!");
//
// // ================ REAL WORLD SCENARIO ================
// // If a user is an admin,show a specific navbar
// // If weather is rainy, show rain icon
// // If number of lives is 0, game is over
//
//
// // ================ IF STATEMENT SYNTAX ================
//
// // if(condition){
// // code here runs if condition evaluates to true
// // }
//
//
// // ================ IF STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin
// var isAdmin = false;
// if (isAdmin ===true) {
//     //show navbar
// }
//
// //TODO Together: Send a 20% off coupon if its users birthday
// var birthday = true;
// if (birthday) {
//     //send coupon
// }
//
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
// var isRainy = true;
// if(isRainy) {
//     alert("It's raining")
// }
//
//
// //TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
// var itemCost = 300;
// var currentBalance = 200;
// if (itemCost <= currentBalance) {
//     alert("You have enough money!")
// }
//
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
// var numberOfLives = 10;
// if (numberOfLives === 0) {
//     alert("Sorry, Game Over")
// }
//
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// var weather = "rainy"
// if (weather === 'snowy') {
//     alert("It's snowing")
// }
//
//
// //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// var numberInput = 10;
// if (numberInput > 10) {
//     alert(true)
// }
//
// //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
//
//
//
// // =============== IF / ELSE SYNTAX ================
//
// // if(condition){
// //     // code here runs if condition evaluates to true
// // } else {
// //     // code here runs if condition evaluates to false
// // }
//
//
//
// // =============== IF / ELSE STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = false;
// if (isAdmin === true) {
//     //show navbar
// } else {
//     //show other navbar
// }
//
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// var isRainy = true;
// if (isRainy === true) {
//     alert("It's raining")
// } else {
//     alert("Have a nice day!")
// }
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// var numberOfLives = 5;
// if (numberOfLives === 0) {
//     alert("Sorry, Game Over")
// } else {
//     alert('Next Level!')
// }
//
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = "snowing";
// if (weather === "snowing") {
//     alert("It's snowing")
// } else {
//     alert("Check back later for more details!")
// }
//
//
//
// //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 11;
// if (numberInput > 10) {
//     alert(true)
// } else {
//     alert("the number is less than 10")
// }
//
//
// //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
//
// function checkIfGameIsOver(){
//     var numberOfLives = 5;
//     if (numberOfLives === 0) {
//         alert("Sorry, Game Over")
//     } else {
//         alert('Next Level!')
//     }
// }
// checkIfGameIsOver()
//
// var numberOfLives = 5
// alert((numberOfLives === 0) ? "Sorry, Game Over" : "Next Level!")
//
//
// //TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
// var answer = confirm("Are you 13 years of age or older?")
// if (answer === true) {
//     alert("You may proceed")
// } else {
//     alert("Sorry, you are not able to proceed")
// }
//
//
//
// // ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// // if(condition1){
// //     // code here runs if condition evaluates to true
// // }else if (condition2){
// //     // code here runs if condition1 is false *and* condition2 evaluates to true
// // }else {
// //     // code here gets executed if condition1 nor condition2 evaluate to true
// // }
//
//
//
// // =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
// //TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "snowing";
// if (weather === "snowing") {
//     alert("It's snowing")
// } else if (weather === "raining") {
//     alert("It's raining")
// } else {
//     alert("Have a nice day")
// }
//
//
// //TODO Together: refactor the above statement as a function
// function weatherCheck(weather) {
//     if (weather === "snowing") {
//         alert("It's snowing")
//     } else if (weather === "raining") {
//         alert("It's raining")
//     } else {
//         alert("Have a nice day")
//     }
// }
// weatherCheck()
//
//
// //TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
// var tColor = "red"
// function lightColor() {
//     if (tColor = "red") {
//         alert("Stop")
//     } else if (tColor = "yellow") {
//         alert("Slow Down")
//     }
//     else {
//         alert("Go")
//     }
// }
// lightColor()
//
//
// // ================ NESTED STATEMENTS ===============
// //TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
//
// var age = 17
// var permit = false
// function licenseEligibility() {
//     if (age < 15) {
//         alert("Not Eligible")
//     } else {
//         if (age === 15) {
//             alert("Eligible for Learner's Permit")
//         } else if (age >= 16 && permit === true) {
//             alert("Eligible for License")
//         } else {
//             alert("Not Eligible for License")
//         }
//     }
// }
// licenseEligibility()
//
//
// // ================ TERNARY STATEMENT ================
// //TODO Together: Regular way - rewrite as ternary
//
// // var message;
// var success = true;
// //
// // if (success) {
// //     message = "Operation was successful.";
// // } else {
// //     message = "Oops, something went wrong.";
// // }
// // console.log(message);
//
//
// var message = (success) ? 'Operation was successful' : 'Oops, something went wrong';
// console.log(message)
//
// //TODO: Refactor the following conditional as a ternary
//
// var weather = "rainy";
// var weatherMessage;
//
// // if(weather === "rainy"){
// //    weatherMessage = "It's raining!";
// // } else {
// //     weatherMessage = "Have a nice day!";
// // }
// // console.log(weatherMessage);
//
// var weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day!";
// console.log(weatherMessage)
//
//
//
// // =============== SWITCH STATEMENT ================
// //TODO Together:
//
// var pizzaPreference = prompt("What kind of pizza do you like?");
// // console.log("User pizza input: " + pizzaPreference);
// //
// // if (pizzaPreference === "pineapple and hot sauce") {
// //     alert("What a coincidence, that's my favorite!");
// // } else if (pizzaPreference === "cheese") {
// //     alert("Just plain cheese? Okay...");
// // } else if (pizzaPreference === "ham") {
// //     alert("Ham is easy to spell and awesome!");
// // } else {
// //     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// // }
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     case "ham":
//         alert("ham is easy to spell and awesome!");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!")
//         break;
// }
//
//
//
//
// //TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
// var weatherCondition = "rainy"
// switch(weatherCondition) {
//     case "rainy":
//         alert("It's raining :(")
//         break;
//     case "sunny":
//         alert("It's nice and sunny!  :)")
//         break;
//     case "snowy":
//         alert("It's cold and snowy :(")
//     default:
//         alert("It's nice out, no adverse weather!")
//         break;
// }
//
// //TODO: Rewrite the intersection function from earlier as a switch statement.
//
// switch (tColor) {
//     case "red":
//         alert("Stop!")
//         break;
//     case "yellow":
//         alert("Slow down, prepare to come to a stop")
//     case "green":
//         alert("Go")
//     default:
//         alert("Light inoperable. Come to a stop and proceed with caution.")
// }
//
//
// // ================ REVERSE ENGINEERING =================
// // Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output
//
//
// // 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html
//
// var allowance = "Has the shopping been done?"
// if (allowance === true) {
//     var followingLine = "Child has earned $10 this week."
// } else {
//     var followingLine = "Child has earned $5 this week."
// }
//
// // 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html
//
// function weatherSelection(selectionOption) {
//     switch (selectionOption) {
//         case "rainy":
//             alert("Rain is falling outside; take a raincoat and a brolly, and don't stay out for too long.")
//             break;
//         case "sunny":
//             alert("It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get ice cream.")
//             break;
//         case "snowy":
//             alert("The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.")
//         default:
//             alert("It isn't raining, but the sky is grey and gloomy, it could turn any minute, so take a rain coat just in case.")
//             break;
//     }
// }

// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

// function backgroundChoice(colorOption) {
//     switch (colorOption):
//         case (colorOption === "black"):
//         "Backgroundcolor = black"
//         default:
//             "BackgroundColor = "white"


"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(colors) {
    if (colors === 'red') {
        console.log("Fire is red")
    } else if (colors === 'orange') {
        console.log("An orange is orange")
    } else if (colors === 'yellow') {
        console.log("The sun is yellow")
    } else if (colors === 'green') {
        console.log("Grass is green")
    } else if (colors === 'blue') {
        console.log("The sky is blue")
    } else if (colors === 'indigo') {
        console.log("Deep blue")
    } else if (colors === 'violet') {
        console.log("The Incredibles character")
    } else {
        console.log("The chosen color is not defined")
    }
}

analyzeColor('nc')

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

analyzeColor(randomColor)

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorS(colors) {
    switch (colors) {
        case 'red':
            console.log("Fire is red");
            break;
        case 'orange':
            console.log("An orange is orange");
            break;
        case 'yellow':
            console.log("The sun is yellow");
            break;
        case 'green':
            console.log("Grass is green");
            break;
        case 'blue':
            console.log("The sky is blue");
            break;
        case 'indigo':
            console.log("Deep blue");
            break;
        case 'violet':
            console.log("The Incredibles character");
            break;
        default:
            console.log("The chosen color is not defined")
    }
}

analyzeColorS(randomColor)

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function analyzeColors1(colors) {
    switch (colors) {
        case 'red':
            alert("Fire is red");
            break;
        case 'orange':
            alert("An orange is orange");
            break;
        case 'yellow':
            alert("The sun is yellow");
            break;
        case 'green':
            alert("Grass is green");
            break;
        case 'blue':
            alert("The sky is blue");
            break;
        case 'indigo':
            alert("Deep blue");
            break;
        case 'violet':
            alert("The Incredibles character");
            break;
        default:
            alert("The chosen color is not defined")
    }
}

var colorAnswer = prompt("What is your favorite color?")
analyzeColors1(colorAnswer)

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount,
 * if your lucky number is 1 you'll get a 10% discount,
 * if it's 2, the discount is 25%,
 * if it's 3, 35%,
 * if it's 4, 50%,
 * if it's 5 you'll get all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, originalPrice) {
    if (luckyNumber === 1) {
        var finalCost = (originalPrice - (.10 * originalPrice))
        alert("You lucky number is " + luckyNumber + ". Your bill before discount was " + billStart + ". Your bill after discount is " + finalCost)
    } else if (luckyNumber === 2) {
        var finalCost = (originalPrice - (.25 * originalPrice))
        alert("You lucky number is " + luckyNumber + ". Your bill before discount was " + billStart + ". Your bill after discount is " + finalCost)
    } else if (luckyNumber === 3) {
        var finalCost = (originalPrice - (.35 * originalPrice))
        alert("You lucky number is " + luckyNumber + ". Your bill before discount was " + billStart + ". Your bill after discount is " + finalCost)
    } else if (luckyNumber === 4) {
        var finalCost = (originalPrice - (.50 * originalPrice))
        alert("You lucky number is " + luckyNumber + ". Your bill before discount was " + billStart + ". Your bill after discount is " + finalCost)
    } else if (luckyNumber === 5) {
        var finalCost = (0)
        alert("You lucky number is " + luckyNumber + ". Your bill before discount was " + billStart + ". Your bill after discount is " + finalCost)
    } else {
        var finalCost = originalPrice
        alert("You lucky number is " + luckyNumber + ". Your bill before discount was " + billStart + ". Your bill after discount is " + finalCost)
    }
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var billStart = parseFloat(prompt("How much was you bill?"))
calculateTotal(luckyNumber, billStart);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function yourNumber() {
    var participate = confirm("Would you like to enter a number?")
    if (participate === true) {
        var inputAnswer = prompt("Enter your number")
        if (isNaN(parseInt(inputAnswer)) === false) {
            alert(inputAnswer % 2 === 0 ? "The number is even" : "The number is odd")
            alert("Your number + 100 is " + (parseInt(inputAnswer) + 100))
            alert(inputAnswer >= 0 ? "The number is positive" : "The number is negative")
        } else {
            alert("The entered value is not a number")
        }
    } else {
        return;
    }
}
yourNumber()
