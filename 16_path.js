/*
normalize join resolve
basename extname dirname
parse format
sep delimiter win32 posix
*/

const {
  normalize,
  join,

  resolve,

  basename,

  parse,
  format,

  sep,
  delimiter,
  win32,
  posix
} = require('path')
const path = require('path')

console.log(require('path'))

// console.log(normalize)
// console.log(normalize('/usr//local/../feajw'))

// 拿到当前路径的绝对路径，这个就是 webpack 当中解决路径问题使用的哦
// console.log(join('/usr', '../../local//', 'bin/'))   // /local/bin/

// console.log(resolve('./'))   // /Users/john/_Mine/node

// console.log(basename('/usr/local/bin/no.txt'))   // no.txt

// const filePath = 'usr/local/node_modules/n/package.json'
// const ret = parse(filePath)
// console.log(ret)
// console.log(format(ret))

// console.log(`sep:`, sep)
// console.log(`win sep`, win32.sep)
// console.log(`delimiter`, delimiter)
// console.log(`win delimiter`, win32.delimiter)
// console.log('PATH:', process.env.PATH)


// const mod = require('./02_cusmod.js')
// console.log(mod.testVar)
// console.log('__dirname', __dirname)
// console.log('process.cwd()', process.cwd())
// console.log('./', path.resolve('./'))
