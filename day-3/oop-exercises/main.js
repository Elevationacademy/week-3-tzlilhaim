// ----------------------OOP Intro----------------------
// Spot Check 1:
class Animal_sc1 {
  constructor(name, numLegs) {
    this.name = name
    this.numLegs = numLegs
  }
}

const dog = new Animal_sc1("Cola", 4)
console.log(dog.name)

// Spot Check 2:
class Human {
  constructor(name, age, isFriendly) {
    this.name = name
    this.age = age
    this.isFriendly = isFriendly
  }
}

const human = new Human("Gideon", 34, true)

console.log(
  human.name +
    " is " +
    human.age +
    " years old. He's " +
    (human.isFriendly ? "friendly." : "not friendly.")
)

// Spot Check 3:
class Animal_sc3 {
  constructor(name, numLegs) {
    this.name = name
    this.numLegs = numLegs
    this.children = []
  }

  giveBirth(name) {
    console.log("Boom. Birthed " + name)
    this.children.push(name)
  }
}

const cat = new Animal_sc3("Cotton", 4)
cat.giveBirth("Tenma")
cat.giveBirth("Kyo")
console.log(cat.name + "'s children are: " + cat.children)

// Spot Check 4:
class Vehicle {
  constructor(x, y, speed, fuel) {
    this.x = x
    this.y = y
    this._speed = speed
    this._fuel = fuel
    Vehicle.carsSold++
  }
  static getInfo() {
    console.log("Cars are great")
  }
  static calculateMoney() {
    console.log(Vehicle.carsSold * 30000)
  }

  set fuel(amount) {
    if (amount < 0) {
      return console.log("Fuel cannot be less than 0")
    } else if (amount > 150) {
      return console.log("Fuel cannot exceed 150")
    }
    this._fuel = amount
  }

  get fuel() {
    return this._fuel
  }

  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive")
    }
    this._speed = speed
  }

  get speed() {
    return this._speed
  }
}

// Spot check 5
Vehicle.carsSold = 0
const car = new Vehicle(1, 3, -7, -4)
Vehicle.calculateMoney()

// Spot chek 6
console.log(car.speed)
console.log(car.speed)

// ----------------------OOP Singleton & Dependency Injection----------------------
// Spot Check 1:
class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "scraps"
    }
}

class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}


class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = feeder.getFood(this.type)
        this._consume(food)
    }
}

let weArePoor = false
const feeder = weArePoor ? new CheapFeeder : new LuxuryFeeder()

const dumbo = new Animal("dumbo", "elephant")
dumbo.eat()
