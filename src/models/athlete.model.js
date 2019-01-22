module.exports = (sequelize, Sequelize) => {
	const Athlete = sequelize.define('athlete', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rg: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cpf: {
            type: Sequelize.STRING,
            allowNull: false
        },
        passport: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
	return Athlete;
}