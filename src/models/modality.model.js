module.exports = (sequelize, Sequelize) => {
	const Modality = sequelize.define('modality', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        amountOfPeople: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });
	
	return Modality;
}