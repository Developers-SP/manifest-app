const modalityService = require('../services/modality.service')
, httpStatus = require('http-status-codes')
, ModalityModel = require('../models/modality.model');

class ModalityController {
    constructor() { 
        modalityService.sync();
    }

    async findById(req, res) {
        await modalityService.prototype.findById(req.params.id)
            .then(modality => {
                res.status(httpStatus.OK).send(modality);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await modalityService.prototype.findAll()
            .then(modalitys => {
                res.status(httpStatus.OK).send(modalitys);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await modalityService.prototype.insert(new ModalityModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Modalidade incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await modalityService.prototype.update(new ModalityModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Modalidade atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new ModalityController();