// const assert = require('assert')   // node 自带的
const { should, expect, assert } = require('chai')
const { add, mul } = require('../src/math')

// 普通手动测试
// if (add(2, 3) === 5) {
//   console.log('add(2, 3) === 5, ok')
// } else {
//   console.log('add(2, 3) !== 5, error')
// }

// node 自带的断言方式
// assert.equal(add(2, 3), 5)


// chai 库
should() // 使用should的之前需要先执行一下
add(2, 3).should.equal(5)

// expect(add(2, 3)).to.equal(5)

// assert.equal(add(2, 3), 5)
