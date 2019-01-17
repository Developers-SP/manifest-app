const db = require('../connections/db.connection')
, UserModel = require('../models/user.model')
, crypt = require('../utils/crypt');

const userService = db.instance
    .define('user',
        new UserModel().defineEntityStructure()
    );

userService.beforeCreate(function(user, options) {
    return crypt.password(user.password)
        .then(success => {
            user.password = success;
        })
        .catch(err => {
            if (err) {
                console.log(err);
            }
        });
    });

userService.prototype.findByEmail = (email) => {
    return userService.findOne({
        where: {email}
    });
}

userService.prototype.findAll = _ => {
    return userService.findAll();    
}

userService.prototype.insert = user => {
    return userService.create(user);    
}

userService.prototype.update = user => {
    return userService.update(user, {where : {id : user.id}}, { multi: true });    
}

module.exports = userService;