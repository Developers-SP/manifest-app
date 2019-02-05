'use strict';

const PilotModel = require('../src/models/pilot.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = PilotModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('pilots', [
            {
              name: 'Nalim',
              registry: 'asd16a81dw',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pilots');
  }
};

