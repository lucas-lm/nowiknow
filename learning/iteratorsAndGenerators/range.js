// Iterators

const range = (...args) => {
  let [from=0, to=0, step=1] = args
  if (args.length === 1) [from, to] = [to, from]
  return {
    [Symbol.iterator]() {
      return {
        current: from,
        last: to,
        step,
        next() {
          this.current += this.step
          return this.current > this.last ? 
            { done: true } : { done: false, value: this.current }
        }
      }
    }
  }
}

module.exports = { range }
