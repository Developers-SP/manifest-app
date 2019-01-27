const db = require('../connections/db.connection');

class PaymentService{

    constructor(){}

    findById(id){
        return db.payment.findOne({
            where: {id}
        });
    }

    findAll(){
        return db.payment.findAll();    
    }

    insert(payment){
        return db.payment.create(payment);    
    }

    update(payment){
        return db.payment.update(payment, {where : {id : payment.id}}, { multi: true });    
    }
}
module.exports = new PaymentService();