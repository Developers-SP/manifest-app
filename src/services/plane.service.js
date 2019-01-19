const db = require('../connections/db.connection');

class PlaneService{
    constructor(){}

    findByPrefix(prefix){
        return db.plane.findOne({
            where: {prefix}
        });
    }
    
    findAll(){
        return db.plane.findAll();    
    }
    
    insert(plane){
        return db.plane.create(plane);    
    }
    
    update(plane){
        return db.plane.update(plane, {where : {id : plane.id}}, { multi: true });    
    }
}

module.exports = new PlaneService;