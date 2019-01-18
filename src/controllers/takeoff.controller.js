const takeoffService = require('../services/takeoff.service')
, httpStatus = require('http-status-codes')
, TakeoffModel = require('../models/takeoff.model');

class TakeoffController {
    constructor() { 
        takeoffService.sync();
    }

    async findById(req, res) {
        await takeoffService.prototype.findById(req.params.id)
            .then(manifest => {
                res.status(httpStatus.OK).send(manifest);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }


    async findAll(req, res) {
        await takeoffService.prototype.findAll()
            .then(manifests => {
                res.status(httpStatus.OK).send(manifests);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await takeoffService.prototype.insert(new TakeoffModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('decolagem incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await takeoffService.prototype.update(new TakeoffModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('decolagem atualizada com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new TakeoffController();