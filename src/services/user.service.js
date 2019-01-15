const db = require('../connections/db.connection');
const UserModel = require('../models/user.model');
const Sequelize = require('sequelize');

const userService = db.instance
    .define('user',
        {
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
            },
            createAt: Sequelize.DATE,
            updateAt: Sequelize.DATE
        }
    );

userService.prototype.isUnique = (email) => {
    return userService.findOne({
        where: {email}
    });
}

userService.prototype.findAll = _ => {
    return userService.findAll();    
}

module.exports = userService;