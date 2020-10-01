var {database} = require('./database');
const { SystemModel } = require('./schema/system');


class SystemController {
    async get(id) {
        return await SystemModel.findById(id);
    };
    
    async save(s) {
        var system = new SystemModel(s);
        await system.save();
        return system;
    };
    
    async remove(id) {
        return await SystemModel.findOneAndDelete(id);
    };
    
    async update(system) {
        return await SystemModel.findOneAndUpdate(system._id, { $set: system }, { new: true });
    };
}

module.exports = { SystemController };