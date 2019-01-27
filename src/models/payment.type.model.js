module.exports = (sequelize, Sequelize) => {
	const PaymentType = sequelize.define('payment', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        paidout: {
            type: Sequelize.FLOAT,
            allowNull: false
        }   
    });
	return PaymentType;
}