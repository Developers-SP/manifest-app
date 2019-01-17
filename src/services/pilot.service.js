const db = require('../connections/db.connection')
, PilotModel = require('../models/pilot.model');

const pilotService = db.instance
    .define('pilot',
        new PilotModel().defineEntityStructure()
    );

pilotService.prototype.findByRegistry = (registry) => {
    return pilotService.findOne({
        where: {registry}
    });
}

pilotService.prototype.findAll = _ => {
    return pilotService.findAll();    
}

pilotService.prototype.insert = pilot => {
    return pilotService.create(pilot);    
}

pilotService.prototype.update = pilot => {
    return pilotService.update(pilot, {where : {id : pilot.id}}, { multi: true });    
}

module.exports = pilotService;