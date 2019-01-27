const db = require('../connections/db.connection')
, crypt = require('../utils/crypt');

class UserService{

    constructor(){
        db.user.beforeCreate(function(user, options) {
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
    }
   
    findByEmail(email) {
        return db.user.findOne({
            where: {email}
        });
    }
    
    findAll(){
        return db.user.findAll();    
    }
    
    insert(user){
        return db.user.create(user);    
    }
    
    update(user){
        return db.user.update(user, {where : {id : user.id}}, { multi: true });    
    }
    
    delete(email){
        return db.user.destroy({where: {email}});    
    }
}

module.exports = new UserService();