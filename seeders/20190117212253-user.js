'use strict';

const UserModel = require('../src/models/user.model');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const model = UserModel
      .defineEntityStructure(
        queryInterface.sequelize
      );

    return model
      .sync()
      .then(
        _ => queryInterface
          .bulkInsert('users', [
            {
              email: 'teste@teste.com',
              password: 'abc',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          ], {})
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
