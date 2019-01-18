const validation = require('../utils/field.validation')
, Sequelize = require('sequelize');

class ModalityModel {
    constructor(pilot){
        this.id = validation.undefinedOrHimself(pilot, "id");
        this.name = validation.undefinedOrHimself(pilot, "name");
    }

    defineEntityStructure(){
        return {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        };
    } 
}
module.exports = ModalityModel;