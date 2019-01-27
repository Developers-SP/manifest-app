module.exports = (sequelize, Sequelize) => {
	const Order = sequelize.define('order', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        total: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
	return Order;
}