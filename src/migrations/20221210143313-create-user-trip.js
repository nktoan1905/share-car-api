'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('UserTrips', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			tripId: {
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
			},
			status: {
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
		await queryInterface.addConstraint('UserTrips', {
			fields: ['userId'],
			type: 'foreign key',
			name: 'user_id_use_trip',
			references: {
				//Required field
				table: 'Users',
				field: 'id',
			},
		});
		await queryInterface.addConstraint('UserTrips', {
			fields: ['tripId'],
			type: 'foreign key',
			name: 'trip_id_have_user',
			references: {
				//Required field
				table: 'Trips',
				field: 'id',
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('UserTrips', 'user_id_use_trip');
		await queryInterface.removeConstraint('UserTrips', 'trip_id_have_user');
		await queryInterface.dropTable('UserTrips');
	},
};
