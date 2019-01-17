const pilotService = require('../services/pilot.service')
, httpStatus = require('http-status-codes')
, PilotModel = require('../models/pilot.model');

class PilotController {
    constructor() { 
        pilotService.sync();
    }

    findByRegistry(req, res) {
        pilotService.prototype.findByRegistry(req.body.registry)
            .then(pilot => {
                res.status(httpStatus.OK).send(pilot);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }


    findAll(req, res) {
        pilotService.prototype.findAll()
            .then(pilots => {
                res.status(httpStatus.OK).send(pilots);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    insert(req, res) {
        pilotService.prototype.insert(new PilotModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Piloto incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    update(req, res) {
        pilotService.prototype.update(new PilotModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Piloto atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new PilotController();