const db = require('../connections/db.connection')
, AthleteModel = require('../models/athlete.model');

const athleteService = db.instance
    .define('athlete',
        new AthleteModel().defineEntityStructure()
    );

athleteService.prototype.findById = (id) => {
    return athleteService.findOne({
        where: {id}
    });
}

athleteService.prototype.findAll = _ => {
    return athleteService.findAll();    
}

athleteService.prototype.insert = athlete => {
    return athleteService.create(athlete);    
}

athleteService.prototype.update = athlete => {
    return athleteService.update(athlete, {where : {id : athlete.id}}, { multi: true });    
}

module.exports = athleteService;