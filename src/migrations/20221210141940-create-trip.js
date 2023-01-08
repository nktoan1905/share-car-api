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
			latStartPosition: {
				type: Sequelize.DOUBLE,
			},
			lngStartPosition: {
				type: Sequelize.DOUBLE,
			},
			latEndPosition: {
				type: Sequelize.DOUBLE,
			},
			lngEndPosition: {
				type: Sequelize.DOUBLE,
			},
			carId: {
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
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Trips');
	},
};
