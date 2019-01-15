const Sequelize = require('sequelize');
class DbConnection {

    constructor(){
        this.instance = new Sequelize('semnome', 'root', 'password', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,
        });
    }
    
    testConnection () {
        return this.db.authenticate();
    }    
}
module.exports = new DbConnection();