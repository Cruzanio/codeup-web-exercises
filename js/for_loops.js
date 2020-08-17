"use strict"

function returnMultiplicationTable(digit) {
    var output = ""
    for (var i = 1; i <= 10; i++) {
        output += digit + " x " + i + " = " + digit * i
        if (i !== 10) {
            output += "\n"
        }
    }
    return output
}

function returnEvenOddMessages(integer) {
    var output2 = ""
    if (integer % 2 === 0) {
        output2 += integer + " is Even"
    } else {
        output2 += integer + " is Odd"
    } return output2
}

function returnTenEvenOddMessages() {
    let output1 = "";
    for (let a = 0; a < 10; a++) {
        var randomNumber = Math. floor(Math. random() * (180 + 1) + 20);
        output1 += returnEvenOddMessage(randomNumber);
        if (a !== 9) output1 += '\n'
    }  return output1;
}
console.log(returnTenEvenOddMessages());