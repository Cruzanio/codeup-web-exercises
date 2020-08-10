"use strict";

console.log("Hello from the other side")

var number = 2 + 2;
var number2 = 4 + 4;
var number3 = number2 + number;
console.log(number3);

var suprise = "Boom!";
alert(suprise);

function toContinue() {
    var question = "Do you want to continue?";
    var answer = confirm(question);
    console.log("answer = " + answer);
    if (answer == false) {
        return;
    } else {
        var question2 = "What's your sign?";
        var answer2 = prompt(question2);
        console.log(answer2);

        var question3 = "What's your favorite color?";
        var answer3 = prompt(question3);
        console.log(answer3);

        if (answer3 == "black") {
            console.log(answer3 + " is my favorite color too!");
        } else {
            console.log("I would have said black.");

        }
    }
}

toContinue();

// var question2 = "What's your sign?";
// var answer2 = prompt(question2);
// console.log(answer2);
//
// var question3 = "What's your favorite color?";
// var answer3 = prompt(question3);
// console.log(answer3);




