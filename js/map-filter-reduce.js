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


let longestEmail = users.reduce((total, {email}) => total + email.length, 0)
console.log(longestEmail)


let instructors = users.reduce((greeting, {name}) => greeting += (name + ", "), "")
console.log(instructors)
