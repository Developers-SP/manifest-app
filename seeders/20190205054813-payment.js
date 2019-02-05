'use strict';

const PaymentModel = require('../src/models/payment.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = PaymentModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('payments', [
            {
              orderId: 1,
              type: 'app',
              paidout: 250.50,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('payments');
  }
};

