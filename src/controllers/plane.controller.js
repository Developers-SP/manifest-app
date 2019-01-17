const planeService = require('../services/plane.service')
, httpStatus = require('http-status-codes')
, PlaneModel = require('../models/plane.model');

class PlaneController {
    constructor() { 
        planeService.sync();
    }

    async findByPrefix(req, res) {
        await planeService.prototype.findByPrefix(req.body.prefix)
            .then(plane => {
                res.status(httpStatus.OK).send(plane);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
                
            });
    }

    async findAll(req, res) {
        await planeService.prototype.findAll()
            .then(planes => {
                res.status(httpStatus.OK).send(planes);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await planeService.prototype.insert(new PlaneModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Avião incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await planeService.prototype.update(new PlaneModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Avião atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new PlaneController();