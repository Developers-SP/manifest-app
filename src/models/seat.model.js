const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');

class SeatModel {

  static get structure() {
    return {
      ...defaultFields,
      takeoffId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        allowNull: false,
        references: {
          key: 'id',
          model: 'takeoffs'
        }
      },
      protesterId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        allowNull: false,
        references: {
          key: 'id',
          model: 'athletes'
        }
      },
      athleteId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        allowNull: false,
        references: {
          key: 'id',
          model: 'athletes'
        }
      },
      modalityId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        allowNull: false,
        references: {
          key: 'id',
          model: 'modalities'
        }
      },
      equipmentId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        allowNull: false,
        references: {
          key: 'id',
          model: 'equipment'
        }
      },
      orderId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        allowNull: false,
        references: {
          key: 'id',
          model: 'orders'
        }
      },
      status: {
        type: Sequelize.BOOLEAN
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('seat', this.structure);
  }
}

module.exports = SeatModel;

