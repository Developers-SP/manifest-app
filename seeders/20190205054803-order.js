'use strict';

const OrderModel = require('../src/models/order.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = OrderModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('orders', [
            {
              status: 'opened',
              total: 875.45,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};

