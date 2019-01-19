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
        this.db = {};
        this.db.Sequelize = Sequelize;
        this.db.instance = this.instance;
    }

    defineEntitys(){
        this.db.user = require('../models/user.model')(this.instance, Sequelize);
        this.db.plane = require('../models/plane.model')(this.instance, Sequelize);
        this.db.pilot = require('../models/pilot.model')(this.instance, Sequelize);
        this.db.takeoff = require('../models/takeoff.model')(this.instance, Sequelize, [this.db.plane, this.db.pilot]);
    }

    syncTables(){
        this.db.instance.sync();
    }

  }

module.exports = new DbConnection();
