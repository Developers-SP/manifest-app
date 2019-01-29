module.exports = (sequelize, Sequelize) => {
	const Space = sequelize.define('space', {
			id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true
			},
			status: {
				type: Sequelize.BOOLEAN
		},
        takeoffId: {
            type: Sequelize.INTEGER,
            onDelete: 'RESTRICT',
            allowNull: false,
            references: { 
              key: 'id',
              model: 'takeoffs' 
            }
        },
        athleteId: {
            type: Sequelize.INTEGER,
            onDelete: 'RESTRICT',
            allowNull: false,
            references: { 
              key: 'id',
              model: 'athletes' 
            }
        },
        protesterId: {
            type: Sequelize.INTEGER,
            onDelete: 'RESTRICT',
            allowNull: false,
            references: { 
              key: 'id',
              model: 'athletes' 
            }
        },
        modalityId: {
            type: Sequelize.INTEGER,
            onDelete: 'RESTRICT',
            allowNull: false,
            references: { 
              key: 'id',
              model: 'modalities' 
            }
        },
        equipmentId: {
            type: Sequelize.INTEGER,
            onDelete: 'RESTRICT',
            allowNull: false,
            references: { 
              key: 'id',
              model: 'equipment' 
            }
        },
        orderId: {
            type: Sequelize.INTEGER,
            onDelete: 'RESTRICT',
            allowNull: false,
            references: { 
              key: 'id',
              model: 'orders' 
            }
        }
	});
	
	return Space;
}