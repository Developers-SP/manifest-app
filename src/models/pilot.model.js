const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');

class PilotModel {

  static get structure() {
    return {
      ...defaultFields,
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      registry: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('pilot', this.structure);
  }
}

module.exports = PilotModel;
