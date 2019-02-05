'use strict';

const TakeOffModel = require('../src/models/takeoff.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = TakeOffModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('takeoffs', [
            {
              pilotId: 1,
              PlaneId: 1,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('takeoffs');
  }
};

