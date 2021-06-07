const express = require('express')
const app = express()
const { port } = require('./config')
const apiRouter = require('./routes/api')
const bodyParser = require('body-parser')
const cors = require('cors')

//baza danych
require('./database/mongoose')

//parser
app.use(bodyParser.json())

//cors
app.use(cors())

//routery
app.use('/api', apiRouter)

//server
app.listen(port, function () {
  console.log('serwer słucha....')
})
