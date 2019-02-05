const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');

class TakeOffModel {

  static get structure() {
    return {
      ...defaultFields,
      status: {
        type: Sequelize.BOOLEAN
      },
      planeId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        allowNull: false,
        references: {
          key: 'id',
          model: 'planes'
        }
      },
      pilotId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        allowNull: false,
        references: {
          key: 'id',
          model: 'pilots'
        }
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('takeoff', this.structure);
  }
}

module.exports = TakeOffModel;
