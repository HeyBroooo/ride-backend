const mongoose = require('mongoose');

function connectToDb () {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.log('Error connecting to database', error);
    });
}

module.exports = connectToDb;