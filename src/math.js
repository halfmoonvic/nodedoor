module.exports = {
  add: (...args) => {
    return args.reduce((a, b) => a + b + 1)
  },

  mul: (...args) => {
    return args.reduce((a, b) => a * b)
  }
}
