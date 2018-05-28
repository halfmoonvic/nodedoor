const http = require('http')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const conf = require('./config/defaultConfig')

const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url)
  fs.stat(filePath, (err, stat) => {
    if (err) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain')
      res.end(`${filePath} is not a directory`)
      return
    }

    if (stat.isFile()) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      // fs.readFile(filePath, (err, data) => {
      //   res.end(data)
      // })
      fs.createStream(filePath).pipe(res)
    } else if (stat.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(files.join(','))
      })
    }
  })
})

server.listen(conf.port, conf.hostname, () => {
  const addr = `http://${conf.hostname}:${conf.port}`
  console.info(`Server started at ${chalk.green(addr)}`)
})
