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

const uniqueLanguages = [...new Set(users.map(user => user.languages))]
console.log(uniqueLanguages);

// function countWords(sentence) {
//     const words = sentence.split(' '); // transform a sentence into an array of words
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {}); // start with an empty object
//     return wordCountObject;
// }
//
// countWords('Mary had a little lamb little lamb little lamb');