const validation = require('../utils/field.validation')
, Sequelize = require('sequelize');

class PilotModel {
    constructor(pilot){
        this.id = validation.undefinedOrHimself(pilot, "id");
        this.name = validation.undefinedOrHimself(pilot, "name");
        this.registry = validation.undefinedOrHimself(pilot, "registry");
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
            },
            registry: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            }
        };
    } 
}
module.exports = PilotModel;