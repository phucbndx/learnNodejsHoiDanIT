require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const app = express()
const port = process.env.PORT || 8888
const webRouter = require('./routers/web')
// config template engine
configViewEngine(app)

app.use('/', webRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})