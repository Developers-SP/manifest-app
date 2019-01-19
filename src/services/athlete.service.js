const db = require('../connections/db.connection');

class AthleteService{

    constructor(){}

    findById(id){
        return db.athlete.findOne({
            where: {id}
        });
    }

    findAll(){
        return db.athlete.findAll();    
    }

    insert(athlete){
        return db.athlete.create(athlete);    
    }

    update(athlete){
        return db.athlete.update(athlete, {where : {id : athlete.id}}, { multi: true });    
    }
}
module.exports = new AthleteService();