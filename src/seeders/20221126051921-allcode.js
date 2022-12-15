'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'AllCodes',
			[
				{
					codeName: 'R1',
					description: 'Admin',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'R2',
					description: 'User',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'R3',
					description: 'Driver',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'CS1',
					description: 'Waitting',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'CS2',
					description: 'Accepted',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'CS3',
					description: 'Rejected',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'TS1',
					description: 'Waitting',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'TS2',
					description: 'Starting',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'TS3',
					description: 'End',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'UTS1',
					description: 'Registered the trip',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					codeName: 'UTS2',
					description: 'Has been rejected by the driver',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('AllCodes', null, {});
	},
};
