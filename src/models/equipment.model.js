const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');


class EquipmentModel {

  static get structure() {
    return {
      ...defaultFields,
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pdStorm: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      lastManutention: {
        type: Sequelize.DATE,
        allowNull: false
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('equipment', this.structure);
  }
}

module.exports = EquipmentModel;
