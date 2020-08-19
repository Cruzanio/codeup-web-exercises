let returnBreak = function() {
    let userNumber = prompt("Please pick an odd number between 1-50.")
    for (let i = 1; i <= 50; i++) {
        if (isNaN(parseInt(userNumber)) || parseInt(userNumber) < 0 || parseInt(userNumber) > 50 || (userNumber % 2 === 0)) {
            userNumber = prompt("Sorry that is not a number that fits the criteria. Please try again.");
        } else if (i % 2 === 0) {
            continue;
        } else if (i == userNumber) {
            console.log("Yikes! Skipping number: " + userNumber);
        } else {
            console.log("Here in an odd number: " + i);
        } if (i >= 51) break;
    }
}
returnBreak()

function timesInsideString(string1, string2) {
    var result = string2.split(string1)
    return result - 1
}

timesInsideString("C", "Coconut")








function timesInsideString(string1, string2) {
    var count = 0
    for (var i = 0; i < string2.length; i++) {
        if (string1 === string2.charAt(i)) {
            count++
        }
    }
    return count
}
timesInsideString("C", "Coconut")

