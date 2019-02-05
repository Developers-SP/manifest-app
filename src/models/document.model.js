const Sequelize = require('sequelize')
  , defaultFields = require('./default.model');

class DocumentModel {

  static get structure() {
    return {
      ...defaultFields,
      athleteId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          key: 'id',
          model: 'athletes'
        }
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false
      }
    };
  }

  static defineEntityStructure(sequelize) {
    return sequelize
      .define('document', this.structure);
  }
}

module.exports = DocumentModel;
