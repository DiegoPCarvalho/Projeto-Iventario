const mongoose = require('mongoose');
const url = process.env.URL;
const dataBase = process.env.DATABASE;

mongoose.connect(url + dataBase)
    .then(db => console.log('Database is connect'))
    .catch(error => console.log('Error: ' + error))

//mongodb://localhost:27017/test'