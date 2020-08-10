"use strict";

console.log('Hello from External JS');

alert("Welcome to my Website!");


var question1 = "what is your favorite color?";
var favcolor = prompt(question1);

alert(favcolor + " is my favorite color too!");

var movie1 = "How many days did you borrow The Little Mermaid?";
var m1days = prompt(movie1);

var movie2 = "How many days did you borrow Brother Bear?";
var m2days = prompt(movie2);

var movie3 = "How many days did you borrow Hercules?";
var m3days = prompt(movie3);

var tPrice = (((parseInt(m1days)) + parseInt(m2days) + parseInt(m3days)) * 3);
alert('Your total price is $' + (tPrice.toFixed(2)));



var hours1 = "How many hours did you work at Google this week?";
var wHours1 = prompt(hours1);

var hours2 = "How many hours did you work at Amazon this week?";
var wHours2 = prompt(hours2);

var hours3 = "How many hours did you work at Facebook this week?";
var wHours3 = prompt(hours3);

var paycheck = ((400 * wHours1) + (380 * wHours2) + (350 * wHours3));
alert('Your paycheck for this week is $' + paycheck.toFixed(2));





// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.