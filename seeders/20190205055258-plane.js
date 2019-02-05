'use strict';

const PlaneModel = require('../src/models/plane.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = PlaneModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('planes', [
            {
              name: 'Romeu',
              model: 'caravan',
              prefix: 'QRL-874',
              amountOfPeople: 16,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('planes');
  }
};

