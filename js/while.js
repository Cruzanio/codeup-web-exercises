function timesTwo() {
    var output = 1
    while (output < 65536) {
        output *= 2
        console.log(output);
    }
}
timesTwo()
// var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }



function conesToSellForTheDay() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    do {
        var customerPurchase = Math.floor(Math.random() * 5) + 1;
        if (allCones === 0) {
            console.log("Yay! I sold them all.")
            break;
        } else if (customerPurchase > allCones) {
            console.log("I can't sell you " + customerPurchase + " cones because I only have " + allCones)
        } else {
            console.log(customerPurchase + " cones sold")
            allCones -= customerPurchase
        }
    } while (allCones >= 0)
}

conesToSellForTheDay()





// if (allCones > 0) {
//     allCones -= customerPurchase
//     console.log(customerPurchase + " cones sold.")
// } else if ((allCones > 0) && (allCones < customerPurchase)) {
//     console.log("I can't sell you " + customerPurchase + " cones because I only have " + allCones + " cones left.")
// } else if (allCones === 0 ) {
//     console.log("Yay! I sold them all!")
// }