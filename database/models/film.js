const mongoose = require('mongoose')

const FilmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    directorName: {
        type: String,
        required: true
    }
})

const Film = mongoose.model('Film',FilmSchema)

module.exports = Film;