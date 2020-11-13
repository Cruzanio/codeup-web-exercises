(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['James', 'Mike', 'Fred', 'Alan'];
    function namesFun() {
        if (names[0] !== 'James') {
            names.unshift('James')
        } else if (names[0] === 'James') {
            names.shift()
        }
            names.push('Cruz')
            console.log(names)

        if (names.length < 10) {
            namesFun(names)
        }
    }
    namesFun(names)

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    };

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name){
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var numbers = [1, 2, 3, 4, 5]

    function returnFirstElement(numbers) {
        return(numbers[0])
    }
    console.log(returnFirstElement(numbers))

    function returnSecondElement(numbers) {
        return(numbers[1])
    }
    console.log(returnSecondElement(numbers))

    function returnLastElement(numbers) {
        return(numbers.slice(-1)[0])
    }
    console.log(returnLastElement(numbers))

    var num = 20

    function iteration() {
        num -= 1
        while (num >= 1) {
            console.log(num)
            iteration()
        }
    }
    iteration()

    var traveling10 = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    function reorder() {
        traveling10.shift()
        for (var i = 0; i <= 9; i++) {
            traveling10.splice(i, 0, 10);
            console.log(traveling10)
            traveling10.splice(i, 1);
        }
    }
    reorder()


})();