"use strict";

console.log('Hello from External JS');
alert("Welcome to my Website!");



var question1 = "what is your favorite color?";
var favcolor = prompt(question1);
alert(favcolor + " is my favorite color too!");



function movieRent() {
    var rentQuestion = "Did you rent any of the following? The little Mermaid, Brother Bear, or Hercules?"
    var rentAnswer = confirm(rentQuestion);
    if (rentAnswer === false) {
        return;
    } else {
        var movie1 = "How many days did you borrow The Little Mermaid?";
        var m1days = prompt(movie1);

        var movie2 = "How many days did you borrow Brother Bear?";
        var m2days = prompt(movie2);

        var movie3 = "How many days did you borrow Hercules?";
        var m3days = prompt(movie3);

        var tPrice = (((parseInt(m1days)) + parseInt(m2days) + parseInt(m3days)) * 3);
        alert('Your total price is $' + (tPrice.toFixed(2)));
    }
}
movieRent();



function paycheckMath() {
    var payQuestion = "Would you like us to calculate your paycheck?"
    var payAnswer = confirm(payQuestion)
    if (payAnswer === false) {
        return;
    } else {
        var hours1 = "How many hours did you work at Google this week?";
        var wHours1 = prompt(hours1);

        var hours2 = "How many hours did you work at Amazon this week?";
        var wHours2 = prompt(hours2);

        var hours3 = "How many hours did you work at Facebook this week?";
        var wHours3 = prompt(hours3);

        var paycheck = ((400 * wHours1) + (380 * wHours2) + (350 * wHours3));
        alert('Your paycheck for this week is $' + paycheck.toFixed(2));
    }
}
paycheckMath();



var classFull = confirm("Click ok to continue if the class you are enrolling in is not full.");
var scheduleConflict = confirm("Click ok to continue if the class does not conflict with your schedule.");
var studentEnrolled = classFull && scheduleConflict;
alert("The student is enrolled: " + studentEnrolled);


var numberOfItemsPurchased = prompt("How many items did you buy today?");
var offerExpired = confirm("Click ok if your product offer has not expired.");
var premiumMember = confirm("Click ok if you are a Premium Member");
var productOfferApplied = (numberOfItemsPurchased >= 2 || premiumMember) && offerExpired;
alert("You may apply your coupon: " + productOfferApplied);




// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.