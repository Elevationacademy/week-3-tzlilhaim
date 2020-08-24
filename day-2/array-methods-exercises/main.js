// -----------------------------Learn-----------------------------
// Spot Check 1:

let vegetables = [
  { name: "Eggplant", color: "purple" },
  { name: "Carrot", color: "orange" },
  { name: "Squash", color: "orange" },
  { name: "Tomatoe", color: "red" },
  { name: "Onion", color: "white" },
  { name: "Sweet Potato", color: "orange" },
]

const filterOrange = vegetables.filter(
  (vegetable) => vegetable.color === "orange"
)
console.log(filterOrange)

// Spot Check 2:
let people = [
  { salary: 1300, goodPerformance: false },
  { salary: 1500, goodPerformance: true },
  { salary: 1200, goodPerformance: true },
  { salary: 1700, goodPerformance: false },
  { salary: 1600, goodPerformance: true },
]

people.forEach(function (person) {
  if (person.goodPerformance) {
    person.salary += 300
  }
})

people.forEach((p) => console.log(p.salary)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)

// Spot Check 3:
let messagesFromDad = [
  "HI HONEY",
  "HOW WAS SCHOOL??",
  "DID YOU EAT TODAY?",
  "I CAN'T FIND THE REMOTE CONTROL",
]
let messagesFromDadLowerCase = messagesFromDad.map((message) =>
  message.toLowerCase()
)

console.log(messagesFromDadLowerCase)

// Spot Check 4:
let posts = [
  {
    id: 0,
    text: "I'm not here",
    comments: [{ id: 0, text: "support that" }],
  },
  {
    id: 1,
    text: "Find me",
    comments: [
      { id: 0, text: "here I am" },
      { id: 1, text: "rock you like a hurricane" },
      { id: 2, text: "dum dum" },
    ],
  },
  {
    id: 2,
    text: "Where's waldo anyway",
    comments: [
      { id: 0, text: "who's waldo" },
      { id: 1, text: "he's called Effi" },
    ],
  },
  {
    id: 3,
    text: "Poof",
    comments: [{ id: 0, text: "like magic" }],
  },
]

const findCommentByID = (postID, commentID) =>
  posts.find((p) => p.id === postID).comments.find((c) => c.id === commentID)
console.log(findCommentByID(1, 0))

// Spot Check 5:
let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
]

if (movies.some((m) => m.studio === "Marvel")) {
  console.log("Let's go watch some movies!")
} else {
  console.log("Let's stay at home")
}

if (movies.every((m) => m.year > 2020)) {
  console.log("Futuristic stuff!")
} else {
  console.log("Yawn")
}

// -----------------------------Apply-----------------------------

// Get array data from api to variable
let usersInfo = []

function fetchArr(cb, func) {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (response) {
      usersInfo = response
      cb(usersInfo, func)
    },
  })
}

function printData(data) {
  console.log(data)
}

function passData(data, func = 0) {
  if (func) {
    func(data)
  }
}

// Get starting array
fetchArr(printData)

// Exercise 1:
const getResultExercise1 = function (arr) {
  let resultArr = arr.map((u) => {
    return { email: u.email, companyName: u.company.name }
  })
  printData(resultArr)
}
fetchArr(passData, getResultExercise1)

// Exercise 2:
const getResultExercise2 = function (arr) {
  let resultArr = arr.filter((u) => u.address.zipcode.charAt(0) === "5")
  printData(resultArr)
}
fetchArr(passData, getResultExercise2)

// Exercise 3:
const getResultExercise3 = function (arr) {
  let resultArr = arr
    .filter((u) => u.address.zipcode.charAt(0) === "5")
    .map((u) => {
      return u.id
    })
  printData(resultArr)
}
fetchArr(passData, getResultExercise3)

// Exercise 4:
const getResultExercise4 = function (arr) {
  let resultArr = arr
    .map((u) => {
      return u.name
    })
    .filter((n) => n.charAt(0) === "C")
  printData(resultArr)
}
fetchArr(passData, getResultExercise4)

// Exercise 5:
const getResultExercise5 = function (arr) {
  let resultArr = arr.some((u) => u.address.city === "South Christey")
  printData(resultArr)
}
fetchArr(passData, getResultExercise5)

// Exercise 6:
const getResultExercise6 = function (arr) {
  let resultArr = arr.find((u) => u.address.suite === "Apt. 950").company.name
  printData(resultArr)
}
fetchArr(passData, getResultExercise6)

// Exercise 7:
const getResultExercise7 = function (arr) {
  arr.forEach((u) =>
    printData(
      u.name +
        " lives in " +
        u.address.city +
        ", and owns the company " +
        u.company.name
    )
  )
}
fetchArr(passData, getResultExercise7)