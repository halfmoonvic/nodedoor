const puppeteer = require('puppeteer')
const { mn } = require('./config/default')
const srcToImg = require('./helper/srcToimg')
;(async () => {
    const browser = await puppeteer.lanuch()
    const page = await browser.newPage()
    await page.goto('https://image.baidu.com')
    console.log('go to https://image.baidu.com')

    await page.setViewport({
        width: 1920,
        height: 1080
    })
    console.log('reset viewport')
    await page.focus('#kw')
    await page.keyboard.sendCharacter('狗')

    await page.click('.s_btn')
    console.log('go to search list')

    page.on('load', async () => {
        console.log('page loading done, start fetch...')

        const srcs = await page.evaluate(() => {
            const images = document.querySelectorAll('img.main_img')
            return Array.from(images).map(img => img.src)
        })

        // srcs.forEach(src => {
        //     srcToImg(src, mn)
        // })

        (async () => {
            for (let i = 0; i < srcs.length; i++) {
                await page.waitFor(200)
                await srcToImg(srcs[i], mn)
            }
        })()

        await browser.close()
    })
})()
