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