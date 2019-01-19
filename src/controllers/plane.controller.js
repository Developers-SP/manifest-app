const planeService = require('../services/plane.service')
, httpStatus = require('http-status-codes');

class PlaneController {
    constructor() {}

    async findByPrefix(req, res) {
        await planeService.findByPrefix(req.params.prefix)
            .then(plane => {
                res.status(httpStatus.OK).send(plane);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
                
            });
    }

    async findAll(req, res) {
        await planeService.findAll()
            .then(planes => {
                res.status(httpStatus.OK).send(planes);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await planeService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Avião incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await planeService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Avião atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new PlaneController();