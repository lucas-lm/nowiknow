const { range } = require('./range')
const { randomLetter } = require('./randomStrings')
const polluteString = require('./polluteString')

// Creates 10 random polluted names
const uniqueRandomNames = new Set()
let name 
for (const i of range(10)) {
  name = ''
  for (const letter of randomLetter()) {
    name += letter
  }
  console.log(`Name ${i}: ${name}`)
  uniqueRandomNames.add(polluteString(name))
}

console.log('====================================')
// Sets are iterables
for (const randomName of uniqueRandomNames) {
  console.log(randomName)
}

console.log('------------Array formatted-------------------')
console.log(Array.from(uniqueRandomNames))