const db = require('../connections/db.connection')
, ManifestModel = require('../models/manifest.model');

const manifestService = db.instance
    .define('manifest',
        new ManifestModel().defineEntityStructure());

manifestService.prototype.findById = (id) => {
    return manifestService.findOne({
        where: {id}
    });
}

manifestService.prototype.findAll = _ => {
    return manifestService.findAll();    
}

manifestService.prototype.insert = manifest => {
    return manifestService.create(manifest);    
}

manifestService.prototype.update = manifest => {
    return manifestService.update(manifest, {where : {id : manifest.id}}, { multi: true });    
}

module.exports = manifestService;