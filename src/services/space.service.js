const db = require('../connections/db.connection');

class SpaceService{

    constructor(){}

    findById(id){
        return db.space.findOne({
            where: {id}
        });
    }

    findAll(){
        return db.space.findAll({
            include: [
                        {model: db.athlete, as: 'athlete'}, 
                        {model: db.modality, as: 'modality'}, 
                        {model: db.takeoff, as: 'takeoff'},
                        {model: db.athlete, as: 'protester'}
                    ]
        });    
    }

    insert(space){
        return db.space.create(space);    
    }

    update(space){
        return db.space.update(space, {where : {id : space.id}}, { multi: true });    
    }
}
module.exports = new SpaceService();