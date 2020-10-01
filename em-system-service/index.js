const mongoose = require('mongoose');
const {SystemModel} = require('./schema/system');

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'emowner';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'iniciar1234';
const MONGO_URI = 'mongodb://' + MONGO_USERNAME + ':' + MONGO_PASSWORD + '@localhost:27017/em';

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

var system1 = new SystemModel({name: 'ResourceActivation', category: 'Ativação'});
console.log(system1);
console.log(system1.name);