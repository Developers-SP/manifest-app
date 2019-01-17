const validation = require('../utils/field.validation')
, Sequelize = require('sequelize');

class PlaneModel {
    constructor(pilot){
        this.id = validation.undefinedOrHimself(pilot, "id");
        this.prefix = validation.undefinedOrHimself(pilot, "prefix");
        this.name = validation.undefinedOrHimself(pilot, "name");
        this.color = validation.undefinedOrHimself(pilot, "color");
        this.model = validation.undefinedOrHimself(pilot, "model");
        this.amountOfPeople = validation.undefinedOrHimself(pilot, "amountOfPeople");
    }

    defineEntityStructure(){
        return {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            prefix: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            color: {
                type: Sequelize.STRING,
                allowNull: false
            },
            model: {
                type: Sequelize.STRING,
                allowNull: false
            },
            amountOfPeople: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        };
    }  
}
module.exports = PlaneModel;