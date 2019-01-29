const db = require('../connections/db.connection');

class OrderService{

    constructor(){}

    findById(id){
        return db.order.findOne({
            where: {id}
        });
    }

    findAll(){
        return db.order.findAll({
            include: [
                        {model: db.payment}
                    ]
        });    
    }

    insert(order){
        return db.order.create(order);    
    }

    update(order){
        return db.order.update(order, {where : {id : order.id}}, { multi: true });    
    }

    delete(id){
        return db.order.destroy({where: {id}});    
    }
}
module.exports = new OrderService();