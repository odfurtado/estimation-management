const database = require('mongoose');

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'emowner';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'iniciar1234';
const MONGO_URL = process.env.MONGO_URL || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_URI = 'mongodb://' + MONGO_USERNAME + ':' + MONGO_PASSWORD + '@' + MONGO_URL + ':' + MONGO_PORT + '/em';

database.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = { database };