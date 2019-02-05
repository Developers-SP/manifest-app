const paymentService = require('../services/payment.service')
, httpStatus = require('http-status-codes');

class PaymentTypeController {

    async findById(req, res) {
        await paymentService.findById(req.params.id)
            .then(paymentType => {
                res.status(httpStatus.OK).send(paymentType);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await paymentService.findAll()
            .then(paymentsType => {
                res.status(httpStatus.OK).send(paymentsType);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await paymentService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('tipo de pagamento incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await paymentService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('tipo de pagamento atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async delete(req, res) {
        await paymentService.delete(req.body.id)
            .then( _ => {
                res.status(httpStatus.OK).send('tipo de pagamento excluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }   
}
  
module.exports = new PaymentTypeController();
