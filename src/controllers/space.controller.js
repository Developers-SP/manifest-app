const spaceService = require('../services/space.service')
, httpStatus = require('http-status-codes');

class SpaceController {

    async findById(req, res) {
        await spaceService.findById(req.params.id)
            .then(athlete => {
                res.status(httpStatus.OK).send(athlete);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await spaceService.findAll()
            .then(athleties => {
                res.status(httpStatus.OK).send(athleties);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await spaceService.insert(req.body)
            .then( jump => {
                jump.addAthlete(req.body.athletes);
                res.status(httpStatus.OK).send('Atleta incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await spaceService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Atleta atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new SpaceController();