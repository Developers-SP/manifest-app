const modalityService = require('../services/modality.service')
, httpStatus = require('http-status-codes');

class ModalityController {
    constructor() {}

    async findById(req, res) {
        await modalityService.findById(req.params.id)
            .then(modality => {
                res.status(httpStatus.OK).send(modality);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await modalityService.findAll()
            .then(modalitys => {
                res.status(httpStatus.OK).send(modalitys);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await modalityService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Modalidade incluida com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await modalityService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('Modalidade atualizada com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async delete(req, res) {
        await modalityService.delete(req.body.id)
            .then( _ => {
                res.status(httpStatus.OK).send('Modalidade excluida com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }  
}
  
module.exports = new ModalityController();