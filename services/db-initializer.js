var mongoose = require('mongoose');

var dbName = 'express_base';

function connectResult(err) {
    if(err) {
        console.log('Failed to connect to ' + dbname + ' database: ', err);
    } else {
        console.log('Connected to ' + dbName + ' database');
    }
}

function initDB() {
    mongoose.connect('mongodb://localhost/' + dbName, connectResult);
}

module.exports = initDB;
