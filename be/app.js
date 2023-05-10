let express = require('express')
let app = express()


let router1 = require('./router1')

app.use('/api/', router1)

let server = app.listen(8000, function() {
    console.log('Server nyala pada port 8000..')
})

