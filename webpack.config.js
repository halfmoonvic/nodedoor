const path = require('path')

module.exports = {
  extry: {
    index: './src/script/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build/srcipt'),
    filename: '[name].js'
  },
  module: {
    rules: [

    ]
  }
}
