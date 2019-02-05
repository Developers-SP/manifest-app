'use strict';

const SeatModel = require('../src/models/seat.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = SeatModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('seats', [
            {
              takeoffId: 1,
              protesterId: 1,
              athleteId: 1,
              modalityId: 1,
              equipmentId: 1,
              orderId: 1,
              status: true,
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('seats');
  }
};

