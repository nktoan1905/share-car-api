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
			'Cars',
			[
				{
					carName: 'Ford Ranger',
					maxUser: 4,
					img: 'https://i1-vnexpress.vnecdn.net/2022/08/13/FordRangerWildTrack29jpg-1660381534.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=w0tazDHVBlyZCdk2iGyozQ',
					status: 4,
					userId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					carName: 'Toyota',
					maxUser: 4,
					img: 'https://i1-vnexpress.vnecdn.net/2021/09/18/ToyotaViosWhite4jpg-1631940387.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=sA7JkFqnylPU770n4mIzgg',
					status: 4,
					userId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					carName: 'Toyota',
					maxUser: 4,
					img: 'https://i1-vnexpress.vnecdn.net/2021/09/18/ToyotaViosWhite4jpg-1631940387.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=sA7JkFqnylPU770n4mIzgg',
					status: 6,
					userId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					carName: 'Toyota',
					maxUser: 4,
					img: 'https://i1-vnexpress.vnecdn.net/2021/09/18/ToyotaViosWhite4jpg-1631940387.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=sA7JkFqnylPU770n4mIzgg',
					status: 5,
					userId: 9,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					carName: 'Toyota corolla Cross',
					maxUser: 4,
					img: 'https://i1-vnexpress.vnecdn.net/2022/08/13/FordRangerWildTrack29jpg-1660381534.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=w0tazDHVBlyZCdk2iGyozQ',
					status: 5,
					userId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					carName: 'Hyundai Creta',
					maxUser: 4,
					img: 'https://i1-vnexpress.vnecdn.net/2022/08/13/FordRangerWildTrack29jpg-1660381534.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=w0tazDHVBlyZCdk2iGyozQ',
					status: 5,
					userId: 7,
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
	},
};
