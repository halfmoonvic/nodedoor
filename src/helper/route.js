const fs = require('fs')
const promisify = require('util').promisify
const stat = promisify(fs.stat)
const readdir = promisify(fs.readdir)

module.exports = async (req, res, filePath) => {
  try {
    const stats = await stat(filePath)

    if (stats.isFile()) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      // fs.readFile(filePath, (err, data) => {
      //   res.end(data)
      // })
      fs.createStream(filePath).pipe(res)
    } else if (stats.isDirectory()) {
      const files = await readdir(filePath)
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(files.join(','))

      // fs.readdir(filePath, (err, files) => {
      //   res.statusCode = 200
      //   res.setHeader('Content-Type', 'text/plain')
      //   res.end(files.join(','))
      // })
    }
  } catch (e) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.end(`${filePath} is not a directory`)
  }
}
