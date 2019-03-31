module.exports = {
  add: (...args) => {
    return args.reduce((a, b) => a + b)
  },

  mul: (...args) => {
    return args.reduce((a, b) => a * b)
  },

  cover: (a, b) => {
    if (a > b) {
      return a - b
    } else if (a == b) {
      return a + b
    } else {
      return 'hfaeh'
    }
  }
}
