const { should, expect, assert } = require('chai')
const { add, mul, cover } = require('../src/math')

// mocha 自己并不包含断言库的
// mocha 是一个 runnertime? 不需要依赖，会自己注入
// 2019/3/31 理解既是，他跟 node python 等 是一个 玩意，提供的是一个 运行环境。我们运行一个 js 脚本，可直接在 terminal 当中 node .js 文件。而我们平常写 js 的时候 还会 引用 node 吗？mocha 同理

// mocha 判断的 在 it 函数的 回调函数的 内部当中，如果不报错，那么就默认通过了，所以，编写测试的时候要注意，自己是否编写正确了，事实上，it 回调函数内部，如果 你什么的都不写，那也是通过了

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      assert.equal(add(2, 3), 5)
    })
    it('should return －1 when 2 + －3', () => {
      assert.equal(add(2, -3), -1)
    })
  })
  describe('mul', () => {
    it('should return 6 when 2 * 3', () => {
      assert.equal(mul(2, 3), 6)
    })
    it('should return 8 when 2 * 4', () => {
      assert.equal(mul(2, 4), 8)
    })
  })

  // istanbul 测试用例 测试每个条件的通过。看看是否覆盖全面
  describe('cover', () => {
    it('should return a < b', () => {
      assert.equal(cover(2, 3), 'hfaeh')
    })

    it('should return a > b', () => {
      assert.equal(cover(3, 2), 1)
    })

    it('should return a > b', () => {
      assert.equal(cover(2, 2), 4)
    })
  })
})
