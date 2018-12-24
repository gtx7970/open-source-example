import starWarsNames from './index'

expect.extend({
  toBeAllString(received) {
    const pass = received.every(el => typeof el === 'string')
    if (pass) {
      return {
        pass: true
      }
    } else {
      return {
        pass: false
      }
    }
  }
})


describe('starWars-name', () => {
  describe('all', () => {
    test('all el should be string', () => {
      expect(starWarsNames.all).toBeAllString()
    })
    test('should contain `Luke Skywalker', () => {
      expect(starWarsNames.all).toContain('Luke Skywalker')
    })
  })

  describe('random', () => {
    test('should return a random item from all', () => {
      let item = starWarsNames.random()
      expect(starWarsNames.all).toContain(item)
    })

    test('should return an array of random items if passed a number', () => {
      let randomItems = starWarsNames.random(3)
      expect(randomItems.length).toBe(3)
      randomItems.forEach(el => {
        expect(starWarsNames.all).toContain(el)
      })
    })
  })
})

