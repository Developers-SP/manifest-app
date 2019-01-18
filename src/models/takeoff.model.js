const validation = require('../utils/field.validation')
, Sequelize = require('sequelize');

class TakeoffModel {
    constructor(takeoff){
        console.log(takeoff);
        this.id = validation.undefinedOrHimself(takeoff, "id");
        this.planeId = validation.undefinedOrHimself(takeoff, "planeId");
        this.pilotId = validation.undefinedOrHimself(takeoff, "pilotId");
        this.time = validation.undefinedOrHimself(takeoff, "time");
    }

    defineEntityStructure(){
        return {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            planeId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "planes", key: "id" } 
            }, 
            pilotId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "pilots", key: "id" } 
            }
        };
    }
}
module.exports = TakeoffModel;