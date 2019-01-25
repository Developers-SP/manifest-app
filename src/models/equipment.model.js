module.exports = (sequelize, Sequelize) => {
	const Equipment = sequelize.define('equipment', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pdStorm: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quanty: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastManutention: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
	return Equipment;
}