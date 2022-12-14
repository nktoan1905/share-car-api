'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Cars', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			carName: {
				type: Sequelize.STRING,
			},
			maxUser: {
				type: Sequelize.STRING,
			},
			img: {
				type: Sequelize.STRING,
			},
			status: {
				type: Sequelize.INTEGER,
			},
			userId: {
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
    await queryInterface.addConstraint('Cars', {
			fields: ['userId'],
			type: 'foreign key',
			name: 'user_have_one_car',
			references: {
				//Required field
				table: 'Users',
				field: 'id',
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('Cars', 'user_have_one_car');
		await queryInterface.dropTable('Cars');
	},
};
