const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comicSchema = new Schema({
    name: String,
    number: String,
    isbn: Number,
    upc: Number,
    barcode: Number,
    image: String,
    shopUpc: Number,
    publisher: String,
    published: Date,
    stories: {
        writer: String,
        inker: String,
        colorist: String,
        letterer: String,
        editor: String,
        penciler: String,
    },
    cover: {
        inker: String,
        editor: String,
        penciler: String,
        colorist: String,
        painter: String
    }
});

const comic = mongoose.model('comics', comicSchema);

module.exports = comic;