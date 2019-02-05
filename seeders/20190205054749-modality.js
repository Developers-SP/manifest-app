'use strict';

const ModalityModel = require('../src/models/modality.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = ModalityModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('modalities', [
            {
              name: 'SOLO',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('modalities');
  }
};

