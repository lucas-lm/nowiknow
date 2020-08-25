// Generators

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const randInt = n => Math.floor(Math.random()*n)

const randomLetter = () => {
  return {
    [Symbol.iterator]: function* () {
      for (let i = 0; i < 23; i++) {
        yield alphabet[randInt(alphabet.length)]
        if (i > 5 && Math.random() < 0.7) return
      }
      return
    }
  }
}

module.exports = { randomLetter, alphabet, randInt }