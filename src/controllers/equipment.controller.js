const equipmentService = require('../services/equipment.service')
, httpStatus = require('http-status-codes');

class EquipmentController {

    async findById(req, res) {
        await equipmentService.findById(req.params.id)
            .then(athlete => {
                res.status(httpStatus.OK).send(athlete);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await equipmentService.findAll()
            .then(athleties => {
                res.status(httpStatus.OK).send(athleties);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await equipmentService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Atleta incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await equipmentService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Atleta atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new EquipmentController();