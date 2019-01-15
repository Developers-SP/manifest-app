const userService = require('../services/user.service')
, md5 = require('md5');
class userController {
    constructor() { }
  
    login(req, res) {
        userService.prototype.isUnique(req.body.email)
            .then(user => {
                if(user.password == md5(req.body.password)){
                    res.status(200).send(user);
                }else{
                    res.status(501).send('Usuário e/ou senha incorretos');
                }   
            });
    }

    validatePassword(user, req, res){
        if(user.password == req.body.password){
            res.status(200).send(user);
        }else{
            res.status(501).send('Usuário e/ou senha incorretos');
        }

    }

    findAll(req, res) {
        userService.prototype.findAll()
            .then(users => {
                res.status(200).send(users);
        });
    }
}
  
module.exports = new userController();