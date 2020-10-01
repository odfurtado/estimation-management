const mongoose = require('mongoose');
const _ = require('lodash');
const { Schema } = mongoose;

const SystemSchema = new Schema({
    name: String, 
    category: {
        type: String,
        enum : ['Ativação','Inventário'],
    },
    domain: String,
    database: String, 
    databaseOwner: String,
    factory: [String]
});

SystemSchema.methods.toJSON = function() {
    return _.pick(this.toObject(), ['_id', 'name', 'category', 'domain', 'database', 'databaseOwner', 'factory']);
};

const SystemModel = mongoose.model('SystemModel', SystemSchema);
module.exports = {SystemModel};