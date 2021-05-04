const router = require('express').Router()
const fetch = require('node-fetch')
const { JSDOM } = require('jsdom')


router.get('/', async function(request, response){
    let data = await fetch('https://everyayah.com/src/getfile.html')
    data = await data.text()
    const { window: { document } } = new JSDOM(data)
    let selectElement = document.getElementById("reciter")
    let options = selectElement.querySelectorAll('option')
    let reciters = []
    for (const iterator of options) {
        reciters.push({
            name: iterator.textContent,
            key: iterator.value
        })
    }
    response.send({
        ok: true,
        reciters
    })
})


module.exports = {
    path: "/reciter",
    router
}