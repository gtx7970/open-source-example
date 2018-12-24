import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './names.json'

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

export default {
  all: starWarsNames,
  random
}
