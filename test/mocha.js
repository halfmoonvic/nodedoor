const { should, expect, assert } = require('chai')
const { add, mul, cover } = require('../src/math')

// mocha 自己并不包含断言库的
// mocha 是一个 render? 不需要依赖，会自己注入
describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      assert(add(2, 3), 5)
    })
    it('should return －1 when 2 + －3', () => {
      assert(add(2, -3), -1)
    })
  })
  describe('mul', () => {
    it('should return 6 when 2 * 3', () => {
      assert(mul(2, 3), 6)
    })
    it('should return 8 when 2 * 4', () => {
      assert(mul(2, 4), 8)
    })
  })

  // istanbul 测试用例 测试每个条件的通过。看看是否覆盖全面
  describe('cover', () => {
    it('should return a < b', () => {
      assert(cover(2, 3), 'hfaeh')
    })

    it('should return a > b', () => {
      assert(cover(3, 2), 1)
    })

    it('should return a > b', () => {
      assert(cover(2, 2), 0)
    })
  })
})
