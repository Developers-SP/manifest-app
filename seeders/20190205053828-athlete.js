'use strict';

const AthleteModel = require('../src/models/athlete.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = AthleteModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('athletes', [
            { 
              name: 'Marcos Jr',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('athletes');
  }
};
