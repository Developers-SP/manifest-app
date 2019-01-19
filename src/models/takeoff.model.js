module.exports = (sequelize, Sequelize, relationship) => {
	const TakeOff = sequelize.define('takeoff', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    relationship.forEach(element => {
        TakeOff.belongsTo(element);
    });

	return TakeOff;
}