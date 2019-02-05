const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');

class UserModel {

  static get structure() {
    return {
      ...defaultFields,
      email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('user', this.structure);
  }
}

module.exports = UserModel;
