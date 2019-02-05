const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');
class ModalityModel {

  static get structure() {
    return {
      ...defaultFields,
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('modality', this.structure);
  }
}

module.exports = ModalityModel;

