function timesTwo() {
    var output = 1
    while (output <= 65536) {
        output *= 2
        console.log(output);
    }
}
timesTwo()


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

function addUp(num) { 
    if(num == 1)
        return num; 
    return num + addUp(num - 1) 
}



