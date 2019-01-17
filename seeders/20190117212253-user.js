'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    queryInterface.createTable('users', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
  });

    return queryInterface.bulkInsert('users', [{
      email: 'teste@teste.com.br',
      password: 'abc',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
