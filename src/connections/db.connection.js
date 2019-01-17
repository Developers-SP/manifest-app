const Sequelize = require('sequelize');

const {
    mode
    , host
    , port
    , db_name
    , db_host
    , db_user
    , db_pass
    , db_por
    , db_dialect
  } = require('../environments');

class DbConnection {

    constructor(){
        this.instance = new Sequelize(db_name, db_user, db_pass, {
            host: db_host,
            dialect: db_dialect,
            operatorsAliases: false,
        });
    }
    
    testConnection () {
        return this.db.authenticate();
    }    
}
module.exports = new DbConnection();