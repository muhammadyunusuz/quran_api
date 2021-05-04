const express = require('express')
const app = express()
const { PORT } = require('./config')
const glob = require("glob")
const path = require('path')



glob("routes/*Route.js", function (er, files) {
    files.forEach(file => {
        const route = require(path.join(__dirname, file))
        app.use(route.path, route.router)
    })
})



app.listen(PORT)