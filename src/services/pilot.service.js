const db = require('../connections/db.connection');

class PilotService{

    constructor(){}

    findByRegistry(registry){
        return db.pilot.findOne({
            where: {registry}
        });
    }
    
    findAll(){
        return db.pilot.findAll();    
    }
    
    insert(pilot){
        return db.pilot.create(pilot);    
    }
    
    update(pilot){
        return db.pilot.update(pilot, {where : {id : pilot.id}}, { multi: true });    
    }

    delete(id){
        return db.pilot.destroy({where: {id}});    
    }
}

module.exports = new PilotService;