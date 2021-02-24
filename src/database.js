const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mernstack';

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;


connection.once('open', (err) => {
    if( err ) {
        console.log(err);
        return;
    } 

    console.log('Databse is Connected');
})