// ---------------------------Learn---------------------------
// Exercise 1 & 2

let recipe = {
  name: "Mashed Potatoes",
  serves: 4,
  calories: 250,
  healthy: true,
  ingredients: [
    {
      name: "water",
    },
    {
      name: "potatoes",
      count: 2,
    },
    {
      name: "butter",
      count: 2,
      unit: "tablespoons",
    },
    {
      name: "salt",
      count: 0.5,
      unit: "teaspoon",
    },
    {
      name: "pepper",
      count: 0.25,
      unit: "teaspoons",
    },
    {
      name: "garlic powder",
      count: 2,
      unit: "teaspoon",
    },
  ],
  directions: [
    "Cut potatoes into half inch thick slices",
    "Add potatoes to a pot and cover with an inch of water.",
    "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
    "Simmer for 20 minutes or until potatoes are fork tender.",
    "Drain water from potatoes, leaving the potatoes in the original pot.",
    "Add remaining ingredients to the pot with the potatoes.",
    "Mash potatoes until they reach the desired consistency.",
    "Serve immediately, or cover and refrigerate.",
  ],
}

console.log(
  recipe.ingredients.filter((i) => i.name == "garlic powder")[0].count
) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"

// Exercise 3 & 4
let animals = [
  {
    name: "Cow",
    avgWeight: {
      unit: "kilogram",
      amount: 363,
    },
    livingPlace: "cowshed",
    isEndagenred: false,
    foods: ["grass", "wheat", "barley", "grain"],
    howDelicious: 5,
  },
  {
    name: "Elephant",
    avgWeight: {
      unit: "ton",
      amount: 5,
    },
    livingPlace: "grassland",
    isEndagenred: true,
    foods: ["grass", "fruits", "peanuts", "roots", "tree bark"],
    howDelicious: 1,
  },
  {
    name: "Wolf",
    avgWeight: {
      unit: "kilogram",
      amount: 47,
    },
    livingPlace: "wilderness",
    isEndagenred: true,
    foods: ["elk", "rodents", "deer", "moose"],
    howDelicious: 1,
  },
  {
    name: "Squirrel",
    avgWeight: {
      unit: "gram",
      amount: 680,
    },
    livingPlace: "trees",
    isEndagenred: false,
    foods: ["peanuts", "grapes", "walnuts", "pistachios"],
    howDelicious: 2,
  },
]

// For each food type, get all animals that eat it
let foodConsumers = []
for (let animal of animals) {
  for (i = 0; i < animal.foods.length; i++) {
    foodConsumers[animal.foods[i]]
      ? foodConsumers[animal.foods[i]].push(animal.name)
      : (foodConsumers[animal.foods[i]] = [animal.name])
  }
}

const getOtherEatSame = (animal) => {
  let otherEatSameTxt = ""
  for (let x of Object.keys(foodConsumers)) {
    if (animal.foods.includes(x)) {
      for (let a of foodConsumers[x]) {
        if (a !== animal.name) {
          otherEatSameTxt += "The " + a + " also eats " + x + "."
        }
      }
    }
  }
  return otherEatSameTxt
}

const getAnimalDiet = (animal) => {
  let foodsTxt = ""

  for (i = 0; i < animal.foods.length; i++) {
    foodsTxt += animal.foods[i]
    if (i == animal.foods.length - 2) {
      foodsTxt += " and "
    } else if (i < animal.foods.length - 1) {
      foodsTxt += ", "
    }
  }
  return foodsTxt
}

const checkEndangered = (animal) =>
  animal.isEndagenred
    ? "it is an endangered."
    : "it is not an endangered animal."

const getAnimalDescription = (animal) => {
  let description =
    "" +
    animal.name +
    " weighs average of " +
    animal.avgWeight.amount +
    " " +
    animal.avgWeight.unit +
    "s. " +
    "It lives in the " +
    animal.livingPlace +
    " and " +
    checkEndangered(animal) +
    " The " +
    animal.name +
    "'s diet consists on " +
    getAnimalDiet(animal) +
    ". " +
    getOtherEatSame(animal)
  return description
}

// Print full description for each animal
for (let animal of animals) {
  console.log(getAnimalDescription(animal))
}
