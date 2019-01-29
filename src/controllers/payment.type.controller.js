const paymentTypeService = require('../services/payment.type.service')
, httpStatus = require('http-status-codes');

class PaymentTypeController {

    async findById(req, res) {
        await paymentTypeService.findById(req.params.id)
            .then(paymentType => {
                res.status(httpStatus.OK).send(paymentType);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await paymentTypeService.findAll()
            .then(paymentsType => {
                res.status(httpStatus.OK).send(paymentsType);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await paymentTypeService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('tipo de pagamento incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await paymentTypeService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('tipo de pagamento atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async delete(req, res) {
        await paymentTypeService.delete(req.body.id)
            .then( _ => {
                res.status(httpStatus.OK).send('tipo de pagamento excluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }   
}
  
module.exports = new PaymentTypeController();