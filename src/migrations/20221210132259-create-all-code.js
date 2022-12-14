'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AllCodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codeName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Users', {
			fields: ['roleId'],
			type: 'foreign key',
			name: 'user_roleId',
			references: {
				//Required field
				table: 'AllCodes',
				field: 'id',
			},
		});
  },
  async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('Users', 'user_roleId');
    await queryInterface.dropTable('AllCodes');
  }
};