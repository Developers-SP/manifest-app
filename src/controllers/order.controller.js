const orderService = require('../services/order.service')
, httpStatus = require('http-status-codes');

class OrderController {

    async findById(req, res) {
        await orderService.findById(req.params.id)
            .then(order => {
                res.status(httpStatus.OK).send(order);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async findAll(req, res) {
        await orderService.findAll()
            .then(orders => {
                res.status(httpStatus.OK).send(orders);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async insert(req, res) {
        await orderService.insert(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('ordem incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    async update(req, res) {
        await orderService.update(req.body)
            .then( _ => {
                res.status(httpStatus.OK).send('ordem atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new OrderController();