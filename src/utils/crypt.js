
const md5 = require('md5');
class Crypt{

    constructor(){}

    password(password) {
        return new Promise(function(resolve, reject) {
            if(password != undefined){
                return resolve(md5(password));
            }else{
                return reject('Não foi possivel encriptar as senha');
            }
        });
    }
}

module.exports = new Crypt();