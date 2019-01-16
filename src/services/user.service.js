const db = require('../connections/db.connection')
, Sequelize = require('sequelize');

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
            }
        }
    );

userService.prototype.findOne = (email) => {
    return userService.findOne({
        where: {email}
    });
}

userService.prototype.findAll = _ => {
    return userService.findAll();    
}

userService.prototype.insert = user => {
    return userService.upsert(user);    
}

module.exports = userService;