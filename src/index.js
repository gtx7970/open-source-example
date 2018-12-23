const uniqueRandomArray = require('unique-random-array')
const starWarsNames = require('./names.json')

const getRandomItems = uniqueRandomArray(starWarsNames)

const random = num => {
  if (num === undefined) {
    return getRandomItems()
  } else {
    const randomItems = []
    for (let i = 0; i < num; i++) {
      randomItems.push(getRandomItems())
    }
    return randomItems
  }
}

module.exports = {
  all: starWarsNames,
  random
}


