const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = '你好啊，格里高利'
})

app.listen(3000)
