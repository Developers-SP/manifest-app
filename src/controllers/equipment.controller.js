const equipmentService = require('../services/equipment.service')
, httpStatus = require('http-status-codes');

class EquipmentController {

    async findById(req, res) {
        await equipmentService.findById(req.params.id)
            .then(equipment => {
                res.status(httpStatus.OK).send(equipment);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await equipmentService.findAll()
            .then(equipments => {
                res.status(httpStatus.OK).send(equipments);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await equipmentService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Equipamento incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await equipmentService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Equipamento atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async delete(req, res) {
        await equipmentService.delete(req.body.id)
            .then( _ => {
                res.status(httpStatus.OK).send('Equipamento excluida com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }  
}
  
module.exports = new EquipmentController();