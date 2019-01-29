const pilotService = require('../services/pilot.service')
, httpStatus = require('http-status-codes');

class PilotController {
    constructor() {}

    async findByRegistry(req, res) {
        await pilotService.findByRegistry(req.params.registry)
            .then(pilot => {
                res.status(httpStatus.OK).send(pilot);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }


    async findAll(req, res) {
        await pilotService.findAll()
            .then(pilots => {
                res.status(httpStatus.OK).send(pilots);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await pilotService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Piloto incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await pilotService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Piloto atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async delete(req, res) {
        await pilotService.delete(req.body.id)
            .then( _ => {
                res.status(httpStatus.OK).send('Piloto excluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
module.exports = new PilotController();