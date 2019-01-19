module.exports = (sequelize, Sequelize) => {
	const Plane = sequelize.define('plane', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        prefix: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false
        },
        amountOfPeople: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });
	
	return Plane;
}