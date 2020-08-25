// Strings as iterables

const { alphabet, randInt } = require('./randomStrings')

const surroundChar = char => {
  const randomPosition = randInt(alphabet.length)
  return alphabet[randomPosition] + alphabet[Math.min(randomPosition+2, alphabet.length-1)] + char
} 

module.exports = function(str) {
  const strToArr = [...str] // same as Array.from(str)
  return strToArr.map(char => surroundChar(char)).join('')
}