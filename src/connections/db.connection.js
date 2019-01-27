const Sequelize = require('sequelize')
, entityUtil = require('../utils/entity');
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
        this.createRelationships();
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
        this.takeoff = require('../models/takeoff.model')(this.instance, Sequelize);
        this.modality = require('../models/modality.model')(this.instance, Sequelize);
        this.athlete = require('../models/athlete.model')(this.instance, Sequelize);
        this.space = require('../models/space.model')(this.instance, Sequelize);
        this.equipment = require('../models/equipment.model')(this.instance, Sequelize);
        this.order = require('../models/order.model')(this.instance, Sequelize);
        this.payment = require('../models/payment.type.model')(this.instance, Sequelize);

    }

    createRelationships(){
        this.takeoff.belongsTo(this.plane);
        this.takeoff.belongsTo(this.pilot);

        this.space.belongsTo(this.takeoff, entityUtil.foreignKeyNotNull());
        this.space.belongsTo(this.athlete, entityUtil.foreignKeyNotNullAndAliasAs('athlete'));
        this.space.belongsTo(this.athlete, entityUtil.foreignKeyNotNullAndAliasAs('protester'));
        this.space.belongsTo(this.modality, entityUtil.foreignKeyNotNull());
        this.space.belongsTo(this.equipment, entityUtil.foreignKeyNotNull());
        this.space.belongsTo(this.order, entityUtil.foreignKeyNotNull());
        this.order.hasMany(this.payment, entityUtil.foreignKeyNotNull());
        this.payment.belongsTo(this.order);
    }

    syncTables(){
        this.instance.sync();
    }

  }

module.exports = new DbConnection();
