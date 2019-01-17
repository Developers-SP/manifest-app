const userService = require('../services/user.service')
, httpStatus = require('http-status-codes')
, UserModel = require('../models/user.model')
, crypt = require('../utils/crypt');

class userController {
    constructor() { 
        userService.sync();
    }
  
    login(req, res) {
        userService.prototype.findByEmail(req.body.email)
            .then(user => {
                crypt.password(req.body.password).
                    then(passwordCrypt =>{
                        console.log('aaaa ' + passwordCrypt)
                        if(user != undefined && user.password == passwordCrypt){
                            res.status(httpStatus.OK).send(user);
                        }else{
                            res.status(httpStatus.UNAUTHORIZED).send('Usuário e/ou senha incorretos');
                        }  
                    }).catch((err) => {
                        res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
                    });
                 
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    findAll(req, res) {
        userService.prototype.findAll()
            .then(users => {
                res.status(httpStatus.OK).send(users);
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    insert(req, res) {
        userService.prototype.insert(new UserModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Usuário incluido com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }

    update(req, res) {
        userService.prototype.update(new UserModel(req.body))
            .then( _ => {
                res.status(httpStatus.OK).send('Usuário atualizado com sucesso');
            }).catch((err) => {
                res.status(httpStatus.SERVICE_UNAVAILABLE).send(err);
            });
    }
}
  
module.exports = new userController();