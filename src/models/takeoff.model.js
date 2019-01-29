module.exports = (sequelize, Sequelize) => {
	const TakeOff = sequelize.define('takeoff', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: Sequelize.BOOLEAN
        },
        planeId: {
            type: Sequelize.INTEGER,
            onDelete: 'RESTRICT',
            allowNull: false,
            references: { 
              key: 'id',
              model: 'planes' 
            }
        },
        pilotId: {
            type: Sequelize.INTEGER,
            onDelete: 'RESTRICT',
            allowNull: false,
            references: { 
              key: 'id',
              model: 'pilots' 
            }
        }
    });
	return TakeOff;
}