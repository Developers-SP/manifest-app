const db = require('../connections/db.connection')
, PlaneModel = require('../models/plane.model');

const planeService = db.instance
    .define('plane',
        new PlaneModel().defineEntityStructure()
    );

planeService.prototype.findByPrefix = (prefix) => {
    return planeService.findOne({
        where: {prefix}
    });
}

planeService.prototype.findAll = _ => {
    return planeService.findAll();    
}

planeService.prototype.insert = plane => {
    return planeService.create(plane);    
}

planeService.prototype.update = plane => {
    return planeService.update(plane, {where : {id : plane.id}}, { multi: true });    
}

module.exports = planeService;