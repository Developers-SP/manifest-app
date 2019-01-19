const takeoffService = require('../services/takeoff.service')
, httpStatus = require('http-status-codes');

class TakeoffController {
    constructor() { 
    }

    async findById(req, res) {
        await takeoffService.findById(req.params.id)
            .then(manifest => {
                res.status(httpStatus.OK).send(manifest);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }


    async findAll(req, res) {
        await takeoffService.findAll()
            .then(manifests => {
                res.status(httpStatus.OK).send(manifests);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await takeoffService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('decolagem incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await takeoffService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('decolagem atualizada com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new TakeoffController();