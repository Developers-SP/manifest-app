module.exports = (sequelize, Sequelize) => {
	const Pilot = sequelize.define('pilot', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        registry: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
        }
    });
	
	return Pilot;
}