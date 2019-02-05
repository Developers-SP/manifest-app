const Sequelize = require('sequelize');
const {
  db_name
  , db_host
  , db_user
  , db_pass
  , db_dialect
} = require('../environments');

const AthleteModel = require('../models/athlete.model')
  , DocumentModel = require('../models/document.model')
  , EquipmentModel = require('../models/equipment.model')
  , ModalityModel = require('../models/modality.model')
  , OrderModel = require('../models/order.model')
  , PaymentModel = require('../models/payment.model')
  , PilotModel = require('../models/pilot.model')
  , PlaneModel = require('../models/plane.model')
  , SeatModel = require('../models/seat.model')
  , TakeOffModel = require('../models/takeoff.model')
  , UserModel = require('../models/user.model');
  
class DbConnection {

  constructor() {
    this.createConnection();
    this.defineEntitys();
    this.syncTables();
  }

  createConnection() {
    this.instance = new Sequelize(db_name, db_user, db_pass, {
      operatorsAliases: false,
      dialect: db_dialect,
      host: db_host
    });
  }

  defineEntitys() {
    this.athlete = AthleteModel
      .defineEntityStructure(this.instance);

    this.document = DocumentModel
      .defineEntityStructure(this.instance);

    this.equipment = EquipmentModel
      .defineEntityStructure(this.instance);

    this.modality = ModalityModel
      .defineEntityStructure(this.instance);

    this.pilot = PilotModel
      .defineEntityStructure(this.instance);

    this.plane = PlaneModel
      .defineEntityStructure(this.instance);

    this.order = OrderModel
      .defineEntityStructure(this.instance);

    this.payment = PaymentModel
      .defineEntityStructure(this.instance);

    this.takeoff = TakeOffModel
      .defineEntityStructure(this.instance);

    this.seat = SeatModel
      .defineEntityStructure(this.instance);

    this.user = UserModel
      .defineEntityStructure(this.instance);
  }

  syncTables() {
    this.instance.sync();
  }

}

module.exports = new DbConnection();
