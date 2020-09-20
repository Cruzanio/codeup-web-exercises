const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let lng = users.filter(({languages}) => languages.length >= 3)
console.log(lng)


let emails = users.map(({email}) => email)
console.log(emails)


let yOfExp = users.reduce((total, {yearsOfExperience}) => total + yearsOfExperience, 0)
console.log(yOfExp)
let averageYears = (yOfExp / users.length)
console.log(averageYears)


// let longestEmail = users.reduce((accum, {email}) => {
//     if (email.length > accum.length) {
//         return email
//     } else {
//         return accum
//     }
// }, "")
// console.log(longestEmail)
let longestEmail = users.reduce((accum, {email}) => (email.length > accum.length) ? email : accum, "")
console.log(longestEmail)

let instructors = `Your instructors are: ` + (users.reduce((greeting, {name}) => greeting + name.charAt(0).toUpperCase() + name.slice(1) + ", ", "")).slice(0, -2)
console.log(instructors)


let langs = users.reduce((accum, {languages}) => accum += languages + ',', "").split(',').slice(0, -1)
let wha = new Set(langs)
console.log(langs)

let userUniqueLanguages2 = langs.filter((x, i, a) => a.indexOf(x) === i)
console.log(userUniqueLanguages2)

// const codeLanguages = users.reduce((acc, {languages}) => {
//     languages.forEach(element => {
//         acc.push(element)
//     })
//     return acc
// }, [])
// const unique = codeLanguages.filter((c, index) => {
//     return codeLanguages.indexOf(c) === index
// })

// let uniqueLanguages = users.map(user => user.languages).join()
// uniqueLanguages = Array.from(new Set(uniqueLanguages.split(','))).toString();
// console.log(uniqueLanguages);


const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];
// Use map, filter, and reduce to:
//     ​
// 1. Create an array of the first letters of each fruit

let firstLet = fruits.map(fruit => fruit.charAt([0]))
console.log(firstLet)

// 1. Create array of user objects based on the customers array of objects (each
// user object should just have name and age properties)

let people = customers.map(({name, age}) => ({name, age}))
console.log(people)

// 1. Create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

let civilServ = customers.filter(({occupation}) => occupation === 'Police Officer' || occupation === 'Teacher')
console.log(civilServ)

// 1. Determine the average age of all the customers

let totalAge = customers.reduce((acc, {age}) => acc += age, 0)
console.log(totalAge)
let averageAge = totalAge / customers.length
console.log(averageAge)

// 1. Create a function `makeSuperPet()` that takes in the pets array as input and
// returns a single pet object with the following shape...

function makeSuperPet(input) {
    const SuperPet = {
        name: input.map(({name}) => name).join(''),
        age: input.reduce((acc, {age}) => acc += age, 0),
        breed: input.map(({breed}) => breed.charAt([0])).join("")
    }
    return SuperPet
}
makeSuperPet(pets)
// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//     age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }
// 1. Create a function that takes in an array of pets and returns an array of the
// length of first names for pugs only. Your output for the given input should
// be [3, 6] for 'Bud' and 'Bowser'

function pugName(input) {
    let pugBreed = input.filter(({breed}) => breed === 'Pug').map(({name}) => name.length)
    console.log(pugBreed)
}
pugName(pets)
// let civilServ = customers.filter(({occupation}) => occupation === 'Police Officer' || occupation === 'Teacher')


// 1. Create a function `getFemaleFamilyMembers()` that when given the family
// variable as an argument, returns an array of female family member names
// ​
// 1. Create a function `makeLongPetString()` that when given the variable of pets,
//     returns a string of all property values with dashes separating each property
// value
// ​
// 1. Create a function that when given an array of first names, returns an array
// of the same names with a last name of Smith


// input = ['Sally', 'Fred', 'Steve']
// output = ['Sally Smith', 'Fred Smith', 'Steve']


// 1. Create a function that when given an array of numbers, return the sum of
// the even numbers
// ​
// 1. Create a function that when given an array of numbers, return the sum of all
// numbers evenly divisible by 10
// ​
// 1. Create a function that when given an array of names, return a string of all
// the first letters of each name
// ​
// 1. Create a function that when given an array of values, returns an array of
// only the truthy values
// ​
// 1. Create a function that when given an object, returns the property values as
// an array of elements
// ​
// 1. Create a function that when given an object, returns the property values as
// an array of elements
// ​
// 1. Create a function that when given three arguments: a min num, a max num, an
// array of nums will return the array of nums that are only between the min
// and max values, inclusive
// ​
// 1. Create a function that when given an array of strings, returns an array of
// objects with properties for the given string value and the length of the
// string and the string without vowels (not including y)