const { should, expect, assert } = require('chai')
const { add, mul } = require('../src/math')

// mocha 自己并不包含断言库的
describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      assert(add(2, 3), 5)
    })
  })
  describe('mul', () => {
    it('should return 6 when 2 * 3', () => {
      assert(add(2, 3), 7)
    })
  })
})
