const mongoose = require('mongoose')

const opinionSchema = new mongoose.Schema({
    rate: {
        type: "Number",
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const opinion = mongoose.model('Opinion',opinionSchema)

module.exports = opinion;