const db = require('../connections/db.connection')
, ModalityModel = require('../models/modality.model');

const modalityService = db.instance
    .define('modality',
        new ModalityModel().defineEntityStructure()
    );

modalityService.prototype.findById = (id) => {
    return modalityService.findOne({
        where: {id}
    });
}

modalityService.prototype.findAll = _ => {
    return modalityService.findAll();    
}

modalityService.prototype.insert = modality => {
    return modalityService.create(modality);    
}

modalityService.prototype.update = modality => {
    return modalityService.update(modality, {where : {id : modality.id}}, { multi: true });    
}

module.exports = modalityService;