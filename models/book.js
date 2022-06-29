// REQUIRE MONGOOSE:
const mongoose = require('mongoose')
const { Schema } = mongoose 

// BOOK SCHEMA:
const bookSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    year: Number,
    quantity: { type: Number, required: true },
    imageURL: String
})

// CREATE MODEL AND EXPORT:
const Book = mongoose.model('Book', bookSchema)
module.exports = Book