const db = require('../connections/db.connection')
, TakeoffModel = require('../models/takeoff.model');

const takeOffService = db.instance
    .define('takeoff',
        new TakeoffModel().defineEntityStructure());

takeOffService.prototype.findById = (id) => {
    return takeOffService.findOne({
        where: {id}
    });
}

takeOffService.prototype.findAll = _ => {
    return takeOffService.findAll();    
}

takeOffService.prototype.insert = takeoff => {
    return takeOffService.create(takeoff);    
}

takeOffService.prototype.update = takeoff => {
    return takeOffService.update(takeoff, {where : {id : takeoff.id}}, { multi: true });    
}

module.exports = takeOffService;