const mongoose = require('mongoose');
const { Schema } = mongoose;

const systemSchema = new Schema({
    name:  String, 
    category: String,
    domain: String,
    database: String, 
    databaseOwner: String,
    factory: [String]
});

const SystemModel = mongoose.model('SystemModel', systemSchema);
module.exports = {SystemModel};