module.exports = (sequelize, Sequelize) => {
	const TakeOff = sequelize.define('takeoff', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });
	return TakeOff;
}