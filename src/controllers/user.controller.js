const userService = require('../services/user.service')
, md5 = require('md5')
, httpStatus = require('http-status-codes')
, UserModel = require('../models/user.model');

class userController {
    constructor() { 
        userService.sync();
    }
  
    login(req, res) {
        userService.prototype.findOne(req.body.email)
            .then(user => {
                if(user != undefined && user.password == md5(req.body.password)){
                    res.status(httpStatus.OK).send(user);
                }else{
                    res.status(httpStatus.UNAUTHORIZED).send('Usuário e/ou senha incorretos');
                }   
            }).catch((err) => {
                console.log(err);
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
}
  
module.exports = new userController();