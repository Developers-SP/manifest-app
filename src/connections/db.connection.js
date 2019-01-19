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

  const db = {};

        instance = new Sequelize(db_name, db_user, db_pass, {
            host: db_host,
            dialect: db_dialect,
            operatorsAliases: false,
        });
   
        db.Sequelize = Sequelize;
        db.instance = instance;

        db.user = require('../models/user.model')(instance, Sequelize);
        db.plane = require('../models/plane.model')(instance, Sequelize);
        db.pilot = require('../models/pilot.model')(instance, Sequelize);

        db.instance.sync();

module.exports = db;
