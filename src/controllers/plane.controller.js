const planeService = require('../services/plane.service')
, httpStatus = require('http-status-codes')
, PlaneModel = require('../models/plane.model');

class PlaneController {
    constructor() { 
        planeService.sync();
    }

    findAll(req, res) {
        planeService.prototype.findAll()
            .then(planes => {
                res.status(httpStatus.OK).send(planes);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    insert(req, res) {
        planeService.prototype.insert(new PlaneModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Avião incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    update(req, res) {
        planeService.prototype.update(new PlaneModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Avião atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new PlaneController();