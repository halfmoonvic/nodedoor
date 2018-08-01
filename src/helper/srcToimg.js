const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

module.exports = (src, dir) => {
    console.log(src)
}

// url => image
const urlToImage = promisify((url, dir) => {
    const mod = /^https:/.test(url) ? https : http
    const ext = path.extname(url)
    const file = path.join(dir, `${Date.now()}${ext}`)

    mod.get(url, res => {
        res.pipe(fs.createWriteStream()).on('finish', () => {
            callback()
            console.log(file)
        })
    })
})

const base64ToImg = async (base64Str, dir) => {
    // data:image/jpeg;base64,
    const matches = base64Str.match(/^data:(.+?);base64,(.+)/)
    try {
        const ext = matches[1].split('/')[1].replace('jpeg', 'jpg')
        const file = path.join(dir, `${Date.now()}.${ext}`)

        await writeFile(file, matches[2], 'base64')
        console.log(file)
    } catch (ex) {
        console.log('非法 base64 字符串')
    }
}
