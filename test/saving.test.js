'use strict'
const assert = require('assert');
const Comic = require('../models/comics.js');

describe('Saves data', (done) => {
    it('Saves the record to the DB', (done) => {
        var book = new Comic({
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
            assert(book.isNew === false);
            done();
        });
    })
})