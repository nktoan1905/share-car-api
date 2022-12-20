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
			'Trips',
			[
				{
					driverId: 7,
					cost: 100000,
					startAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
					startPosition: "65, ngõ 38, Tư đình, Long Biên, Hà Nội",
					endPosition: "66 P. Nguyên Hồng, Láng Hạ, Đống Đa, Hà Nội",
					carId: 4,
					status: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					driverId: 8,
					cost: 100000,
					startAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
					startPosition: "66 P. Nguyên Hồng, Láng Hạ, Đống Đa, Hà Nội",
					endPosition: "65, ngõ 38, Tư đình, Long Biên, Hà Nội",
					carId: 5,
					status: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					driverId: 8,
					cost: 100000,
					startAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 2000),
					startPosition: "66 P. Nguyên Hồng, Láng Hạ, Đống Đa, Hà Nội",
					endPosition: "1 Giải Phóng, Bách Khoa, Hai Bà Trưng, Hà Nội, Việt Nam",
					carId: 5,
					status: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					driverId: 8,
					cost: 100000,
					startAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 3000),
					startPosition: "66 P. Nguyên Hồng, Láng Hạ, Đống Đa, Hà Nội",
					endPosition: "1 Giải Phóng, Bách Khoa, Hai Bà Trưng, Hà Nội, Việt Nam",
					carId: 5,
					status: 7,
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
