fetch("https://swapi.dev/api/planets/6/")
    .then(result => result.json())
    .then(data => console.log(data))

fetch("https://anapioficeandfire.com/api/houses/578")
    .then(result => result.json())
    .catch(error => console.log(error))
    .then(data => console.log(data))
