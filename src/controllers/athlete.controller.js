const athleteService = require('../services/athlete.service')
, httpStatus = require('http-status-codes');

class AthleteController {

    async findById(req, res) {
        await athleteService.findById(req.params.id)
            .then(athlete => {
                res.status(httpStatus.OK).send(athlete);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await athleteService.findAll()
            .then(athleties => {
                res.status(httpStatus.OK).send(athleties);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await athleteService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Atleta incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await athleteService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Atleta atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new AthleteController();