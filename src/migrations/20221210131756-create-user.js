'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				type: Sequelize.STRING,
			},
			password: {
				type: Sequelize.STRING,
			},
			fullName: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			img: {
				type: Sequelize.STRING,
			},
			age: {
				type: Sequelize.DATE,
			},
			phoneNumber: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			cardId: {
				type: Sequelize.STRING,
			},
			bankId: {
				type: Sequelize.STRING,
			},
			roleId: {
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
		await queryInterface.dropTable('Users');
	},
};
