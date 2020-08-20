var games = [
    'Sonic',
    'Spyro',
    'Crash Bandicoot',
    'Need for Speed',
    'Super Mario 64',
];

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
var today = daysOfTheWeek[4]
console.log(today)

for (var i = 0; i < daysOfTheWeek.length; i++) {
    console.log(daysOfTheWeek[i])
}

for (var i = 0; i < daysOfTheWeek.length; i++) {
    console.log((i+1) + ' : ' + daysOfTheWeek[i])
}


games.forEach(function(game){
    console.log(game)
})

var things = [true, "hello", 3]
things.forEach(function(thing){
    console.log(typeof thing)
})

daysOfTheWeek.forEach(function(day, index) {
    console.log((index+1) + ': ' + day)
});

