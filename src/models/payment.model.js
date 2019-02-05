const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');

class PaymentModel {

  static get structure() {
    return {
      ...defaultFields,
      orderId: {
        type: Sequelize.INTEGER,
        onDelete: 'RESTRICT',
        allowNull: false,
        references: {
          key: 'id',
          model: 'orders'
        }
      },
      type: {
        type: Sequelize.ENUM,
        values: [
          'banckSlip', 
          'fidelity',
          'credit', 
          'debit',
          'app'
        ],
        allowNull: false
      },
      paidout: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('payment', this.structure);
  }
}

module.exports = PaymentModel;
