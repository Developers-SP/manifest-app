module.exports = (sequelize, Sequelize, relationship) => {
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
    
    relationship.forEach(element => {
        Athlete.belongsTo(element);
    });

	return Athlete;
}