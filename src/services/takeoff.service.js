const db = require('../connections/db.connection');

class TakeOffService{
    constructor(){}

    findById(id){
        return db.takeoff.findOne({
            where: {id}
        });
    }
    
    findAll(){
        return db.takeoff.findAll();    
    }
    
    insert(takeoff){
        return db.takeoff.create(takeoff);    
    }
    
    update(takeoff){
        return db.takeoff.update(takeoff, {where : {id : takeoff.id}}, { multi: true });    
    }
}

module.exports = new TakeOffService;