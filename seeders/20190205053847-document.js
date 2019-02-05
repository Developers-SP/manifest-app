'use strict';

const DocumentModel = require('../src/models/document.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = DocumentModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('documents', [
            {
              athleteId: 1,
              type: 'abpqd',
              number: 'B-0527',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('documents');
  }
};
