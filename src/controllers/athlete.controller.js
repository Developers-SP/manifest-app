const athleteService = require('../services/athlete.service')
, httpStatus = require('http-status-codes')
, AthleteModel = require('../models/athlete.model');

class AthleteController {
    constructor() { 
        athleteService.sync();
    }

    async findById(req, res) {
        await athleteService.prototype.findById(req.params.id)
            .then(athlete => {
                res.status(httpStatus.OK).send(athlete);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await athleteService.prototype.findAll()
            .then(athleties => {
                res.status(httpStatus.OK).send(athleties);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await athleteService.prototype.insert(new AthleteModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Atleta incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await athleteService.prototype.update(new AthleteModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Atleta atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new AthleteController();