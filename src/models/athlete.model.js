const validation = require('../utils/field.validation')
, Sequelize = require('sequelize');

class AthleteModel {
    constructor(athlete){
        this.id = validation.undefinedOrHimself(athlete, "id");
        this.name = validation.undefinedOrHimself(athlete, "name");
        this.rg = validation.undefinedOrHimself(athlete, "rg");
        this.cpf = validation.undefinedOrHimself(athlete, "cpf");
        this.passport = validation.undefinedOrHimself(athlete, "passport");
        this.modalityId = validation.undefinedOrHimself(athlete, "modalityId");
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
            rg: {
                type: Sequelize.STRING,
                allowNull: false
            },
            cpf: {
                type: Sequelize.STRING,
                allowNull: false
            },
            passport: {
                type: Sequelize.STRING,
                allowNull: false
            },
            modalityId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "modalities", key: "id" } 
            }
        };
    } 
}
module.exports = AthleteModel;