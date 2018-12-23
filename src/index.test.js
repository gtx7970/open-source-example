const { all, random } = require('./index')

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
      expect(all).toBeAllString()
    })
    test('should contain `Luke Skywalker', () => {
      expect(all).toContain('Luke Skywalker')
    })
  })

  describe('random', () => {
    test('should return a random item from all', () => {
      let item = random()
      expect(all).toContain(item)
    })

    test('should return an array of random items if passed a number', () => {
      let randomItems = random(3)
      expect(randomItems.length).toBe(3)
      randomItems.forEach(el => {
        expect(all).toContain(el)
      })
    })
  })
})

