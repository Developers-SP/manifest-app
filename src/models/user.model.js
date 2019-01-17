const validation = require('../utils/field.validation')
, Sequelize = require('sequelize');

class UserModel {
    constructor(user){
        this.id = validation.undefinedOrHimself(user, "id");
        this.email = validation.undefinedOrHimself(user, "email");
        this.password = validation.undefinedOrHimself(user, "password");
    }

    defineEntityStructure(){
        return {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            }
        };
    }
}
module.exports = UserModel;