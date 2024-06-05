const express = require('express')
const { getHomePage } = require('../controllers/homeController')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)

// define the home page route
router.get('/', getHomePage)
// define the about route
router.get('/about', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router