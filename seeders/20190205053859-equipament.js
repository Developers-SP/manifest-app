'use strict';

const EquipmentModel = require('../src/models/equipment.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = EquipmentModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('equipment', [
            {
              name: 'Sabre 150',
              pdStorm: 150,
              lastManutention: new Date(),
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('equipment');
  }
};
