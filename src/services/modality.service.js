const db = require('../connections/db.connection');

class ModalityService{

    constructor(){}

    findById(id){
        return db.modality.findOne({
            where: {id}
        });
    }
    
    findAll(){
        return db.modality.findAll();    
    }
    
    insert(modality){
        return db.modality.create(modality);    
    }
    
    update(modality){
        return db.modality.update(modality, {where : {id : modality.id}}, { multi: true });    
    }

    delete(id){
        return db.modality.destroy({where: {id}});    
    }
}

module.exports = new ModalityService();