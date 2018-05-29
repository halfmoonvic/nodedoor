// 服务端根据客户端 'Accept-Encoding' 的属性值判断可以采取哪些压缩方式
// 之后在 通过 Response Headers 中设置 'Content-Type' 来告诉客户端发送的文件是采取的哪种压缩方式

const {createGzip, createDeflate} = require('zlib')

module.exports = (rs, req, res) => {
  const acceptEncoding = req.headers['accept-encoding']

  if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
    return rs
  } else if (acceptEncoding.match(/\bgzip\b/)) {
    res.setHeader('Content-Encoding', 'gzip')
    return rs.pipe(createGzip())
  } else if (acceptEncoding.match(/\bdeflate\b/)) {
    res.setHeader('Content-Encoding', 'deflate')
    return rs.pipe(createDeflate())
  }
}
