const db = require('../connections/db.connection');

class EquipmentService{

    constructor(){}

    findById(id){
        return db.equipment.findOne({
            where: {id}
        });
    }

    findAll(){
        return db.equipment.findAll();    
    }

    insert(equipment){
        return db.equipment.create(equipment);    
    }

    update(equipment){
        return db.equipment.update(equipment, {where : {id : equipment.id}}, { multi: true });    
    }

    delete(id){
        return db.equipment.destroy({where: {id}});    
    }
}
module.exports = new EquipmentService();