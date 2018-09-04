const puppeteer = require('puppeteer')
const { screenshot } = require('./config/default')

// 为什么加分号？
// 如果不加分号，则会认为上面 require 运行之后返回的仍是一个函数，之后在运行传参进去一个匿名函数
;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.zhihu.com')
    await page.screenshot({
        path: `${screenshot}/${Date.now()}.png`
    })
    await browser.close()
})()
