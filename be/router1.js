let express = require('express')
let router1 = express.Router()

// Middleware yang spesifik untuk router
router1.use(function timelog(req, res, next) {
    console.log(`Requested URI Path: ${req.url}`)
    next()
})

// Definisikan router ke homepage biodata
router1.get('/biodata', function(req, res) {
    res.send('A')
})