const validation = require('../utils/field.validation')
, Sequelize = require('sequelize');

class ManifestModel {
    constructor(manifest){
        console.log(manifest);
        this.id = validation.undefinedOrHimself(manifest, "id");
        this.planeId = validation.undefinedOrHimself(manifest, "planeId");
        this.pilotId = validation.undefinedOrHimself(manifest, "pilotId");
        this.time = validation.undefinedOrHimself(manifest, "time");
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
module.exports = ManifestModel;