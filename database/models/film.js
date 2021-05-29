const mongoose = require('mongoose')

const Film = mongoose.model('Film',{
    title: String,
    price: String,
    directorName: String
})



module.exports = Film;