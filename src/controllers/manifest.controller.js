const manifestService = require('../services/manifest.service')
, httpStatus = require('http-status-codes')
, ManifestModel = require('../models/manifest.model');

class ManifestController {
    constructor() { 
        manifestService.sync();
    }

    findById(req, res) {
        manifestService.prototype.findById(req.body.id)
            .then(manifest => {
                res.status(httpStatus.OK).send(manifest);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }


    findAll(req, res) {
        manifestService.prototype.findAll()
            .then(manifests => {
                res.status(httpStatus.OK).send(manifests);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    insert(req, res) {
        manifestService.prototype.insert(new ManifestModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Manifesto incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    update(req, res) {
        manifestService.prototype.update(new ManifestModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Manifesto atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new ManifestController();