const mongoose = require('mongoose'); //connect to MongoDB
mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true,  useFindAndModify: false, useUnifiedTopology: true});

    mongoose.connection.once('open', function(){
        console.log('Connection Complete');
        done();
    }).on('error', function(err){
        console.log('Connection error ', err);
    });
});

beforeEach((done) => {
    mongoose.connection.collections.comics.drop(() => {
        done();
    });
})

