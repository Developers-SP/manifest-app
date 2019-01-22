module.exports = (sequelize, Sequelize) => {
	const Space = sequelize.define('space', {
			id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
			},
			status: {
				type: Sequelize.BOOLEAN
		}
	});
	
	return Space;
}