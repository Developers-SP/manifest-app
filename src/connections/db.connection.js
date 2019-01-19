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

  class DbConnection{

    constructor(){
        this.createConnection();
        this.defineEntitys();
        this.syncTables();
    }

    createConnection(){
        this.instance = new Sequelize(db_name, db_user, db_pass, {
            host: db_host,
            dialect: db_dialect,
            operatorsAliases: false,
        });
    }

    defineEntitys(){
        this.user = require('../models/user.model')(this.instance, Sequelize);
        this.plane = require('../models/plane.model')(this.instance, Sequelize);
        this.pilot = require('../models/pilot.model')(this.instance, Sequelize);
        this.takeoff = require('../models/takeoff.model')(this.instance, Sequelize, [this.plane, this.pilot]);
    }

    syncTables(){
        this.instance.sync();
    }

  }

module.exports = new DbConnection();
