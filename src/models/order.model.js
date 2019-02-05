const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');

class OrderModel {

  static get structure() {
    return {
      ...defaultFields,
      status: {
        type: Sequelize.ENUM,
        values: [
          'processing', 
          'waiting',
          'paidout', 
          'opened' 
        ],
        allowNull: false
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('order', this.structure);
  }
}

module.exports = OrderModel;
