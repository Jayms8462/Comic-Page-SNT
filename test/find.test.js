'use strict'
const assert = require('assert');
const Comic = require('../models/comics.js');

describe('Finding records', () => {
    var book;
    beforeEach((done) => {
        book = new Comic({
            name: '1 Month to Live #5',
            isbn: 7596060729700511,
            image: 'https://comicbookrealm.com/cover-scan/1d4f491cfeafc0624a7ae2e70af2b310/xl/scan.jpg',
            shopUpc: 1596839076868,
            publisher: 'Marvel',
            published: '09-29-2010',
            stories: {
                writer: 'Rick Remender',
                penciler: 'Andrea Mutti'
            },
            cover: {
                penciler: 'Mike Del Mundo',
                painter: 'Mike Del Mundo'
            }
        })
        book.save().then(() => {
            done();
        });
    })

    it('Find one record from the DB', (done) => {
        Comic.findOne({isbn: 7596060729700511}).then((result) => {
            assert(result.isbn === 7596060729700511);
            done();
        })
    })
    it('Find one record from the DB', (done) => {
        Comic.findOne({_id: book._id}).then((result) => {
            assert(result._id.toString() === book._id.toString());
            done();
        })
    })
});

    