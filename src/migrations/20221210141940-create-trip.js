'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Trips', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			driverId: {
				type: Sequelize.INTEGER,
			},
			cost: {
				type: Sequelize.DOUBLE,
			},
			startAt: {
				type: Sequelize.DATE,
			},
			startPosition: {
				type: Sequelize.STRING,
			},
			endPosition: {
				type: Sequelize.STRING,
			},
			carId: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
		await queryInterface.addConstraint('Trips', {
			fields: ['driverId'],
			type: 'foreign key',
			name: 'driver_have_many_trip',
			references: {
				//Required field
				table: 'Users',
				field: 'id',
			},
		});
		await queryInterface.addConstraint('Trips', {
			fields: ['carId'],
			type: 'foreign key',
			name: 'driver_have_car',
			references: {
				//Required field
				table: 'Cars',
				field: 'id',
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('Trips', 'driver_have_many_trip');
		await queryInterface.dropTable('Trips');
	},
};
