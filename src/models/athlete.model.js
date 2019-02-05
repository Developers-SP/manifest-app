const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');

class AthleteModel {

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
      .define('athlete', this.structure);
  }
}

module.exports = AthleteModel;
