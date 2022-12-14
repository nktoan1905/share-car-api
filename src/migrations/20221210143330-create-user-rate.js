'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('UserRates', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			driverId: {
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
			},
			rate: {
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
    await queryInterface.addConstraint('UserRates', {
			fields: ['userId'],
			type: 'foreign key',
			name: 'user_userId_rate',
			references: {
				//Required field
				table: 'Users',
				field: 'id',
			},
		});
		await queryInterface.addConstraint('UserRates', {
			fields: ['driverId'],
			type: 'foreign key',
			name: 'user_driverId',
			references: {
				//Required field
				table: 'Users',
				field: 'id',
			},
		});
	},
	async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('UserRates', 'user_userId_rate');
		await queryInterface.removeConstraint('UserRates', 'user_driverId');
		await queryInterface.dropTable('UserRates');
	},
};
