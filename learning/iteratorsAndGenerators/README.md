# Iterators and Generators

JavaScript provides an interface to create objects which we can loop through it using `for .. of` loops and some other methods for iterable objects, which is the subject os this study.

## Table of Contents

  - [What is iterators](#what-is-iterators)
  - [Native iterables in javascript and how to use it](#native-iterables-in-javascript-and-how-to-use-it) 
  - [The iterator method and JavaScript Symbols](#the-iterator-method-and-javascript-symbols)
  - [Implementing iterables](#implementing-iterables)
  - [About generators](#about-generators)
- [References](#references)

### What is iterators?

Iterators are interfaces that allow you to create iterable objects. Iterable objects are a special kind of object in javascript that you can use some operations and methods like `for .. of` loops and `Array.from` in it.

### Native iterables in javascript and how to use it

Arrays are the most popular type of iterables in JavaScript, but there is some other native iterables like Strings and Sets. 

We can use them in a `for .. of` loop to operate over each item of the iterable:

```js
const myIterable = new Set(['John', 'Doe'])
for (const name of myIterable) {
  // do something with name
}
```

Every iterable can be converted in an array using the spread operator or the `Array.from` method:

```js
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const arrayOfLetters = [...alphabet]
const arrayFromAlphabet = Array.from(alphabet) 
```

### The iterator method and JavaScript Symbols

Symbols in JavaScript are special keys that can be used as object keys. Using symbols helps us to avoid property name collision since they represent unique identifiers. The native `Symbol.iterator` key is used to implement the iterator method of iterable objects. `Symbols` are skipped from `for .. in` loops.

### Implementing iterables

An iterator can be created by implementing the iterator method under the `Symbol.iterator` key into any custom object. This method must return an object with a next method (aka iterator), which must return an object in the form `{ done: Boolean, value?: any }`:

```js
const myIterable = { 1: Math.log, 2: Math.exp, 3: Math.sqrt }
// Implementing the iterator method in myIterable object
myIterable[Symbol.iterator] = function() {
  return {
    current: 1,
    last: 3,
    next() {
      return this.current > 3 ? { done: true }  : { done: false, value: myIterable[this.current++] }
    }
  }
}
```

With the iterable above we could loop through the functions using a `for .. of` like below:

```js
for (const fn of myIterable) {
  console.log(fn(10))
}
```

### About Generators

> Generators are factories of iterators.

Generator is a syntatic sugar to create iterable objects. A generator is a special function which we can suspend its execution and recall it in each iteration. The keyword `yield` in a generator returns a value for the current iteration and pause the execution of the generator function until we (or javascript) call the `next()` method of the iterator generated by the generator. When the `next()` method is called, the execution of the generator proceeds from the point where it had stopped until the next `yield` statement again. This procedure repeats until the generator function reachs an explicit `return` statement or the end of the function (implicit `return undefined`).

The syntax for a generator function is a little bit different from regular functions. In generators we declare a `function*` instead of just `function`, and it can have one or more `yield` statement. A `return` statement define the end of the iteration and the end of the generator function itself. Example:

```js
function* generateRandomNumbers() {
  yield Math.random()
  yield Math.random()
  return Math.random()
}
```

The `generateRandomNumbers` is an iterator, so it could create an iterable object by linking it to the `[Symbol.iterator]` key of a custom object:

```js
const randomNumbers = {
  [Symbol.iterator]: generateRandomNumbers
}

for (const randomNumber of randomNumbers) {
  console.log(randomNumber)
}
```

## References

https://javascript.info/iterable
https://javascript.info/generators

### Videos

https://www.youtube.com/watch?v=W4brAobC2Hc&list=PL0zVEGEvSaeG2T5n8FuPGb11JHea7idb9

### Articles

https://stackabuse.com/es6-iterators-and-generators/
https://medium.com/@madasamy/explanation-about-iterators-and-generators-in-javascript-es6-f7e669cbe96e
