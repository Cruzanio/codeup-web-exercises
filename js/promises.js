let starFetch = fetch("https://swapi.dev/api/planets/6/")
    .then(result => result.json())
    .then(data => {
        console.log(data)
        return "Star Wars complete"
    })

let GOTfetch = fetch("https://anapioficeandfire.com/api/houses/378")
    .then(result => result.json())
    .catch(error => console.log(error))
    .then(data => {
        console.log(data)
        return "GOT complete"
    })

Promise.all([starFetch, GOTfetch])
.then(data => {
    console.log('Both are complete!')
    console.log(data);
})

let redTurtle = Math.floor(Math.random()*10000)
let blueTurtle = Math.floor(Math.random()*10000)
let orangeTurtle = Math.floor(Math.random()*10000)
let purpleTurtle = Math.floor(Math.random()*10000)

let goRedTurtle = new Promise((resolve => {
    setTimeout(() => {
        resolve("Red Turtle Finished!")
    }, redTurtle)
}));

let goBlueTurtle = new Promise((resolve => {
    setTimeout(() => {
        resolve("Blue Turtle Finished!")
    }, blueTurtle)
}));

let goOrangeTurtle = new Promise((resolve => {
    setTimeout(() => {
        resolve("Orange Turtle Finished!")
    }, orangeTurtle)
}));

let goPurpleTurtle = new Promise((resolve => {
    setTimeout(() => {
        resolve("Purple Turtle Finished!")
    }, purpleTurtle)
}));

Promise.race([goRedTurtle, goBlueTurtle, goOrangeTurtle, goPurpleTurtle])
.then(data => console.log(data))