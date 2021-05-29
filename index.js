const express = require('express')
const app = express()
const {port} = require('./config')
const apiRouter = require('./routes/api')

require('./database/mongoose')


app.use('/', apiRouter);

app.listen(port, function (){
    console.log('serwer słucha....')
})