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
			'Cities',
			[
				{ name: 'Hồ Chí Minh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Hà Nội', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Đà Nẵng', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bình Dương', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Đồng Nai', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Khánh Hòa', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Hải Phòng', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Long An', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Quảng Nam', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bà Rịa Vũng Tàu', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Đắk Lắk', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Cần Thơ', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bình Thuận  ', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Lâm Đồng', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Thừa Thiên Huế', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Kiên Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bắc Ninh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Quảng Ninh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Thanh Hóa', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Nghệ An', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Hải Dương', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Gia Lai', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bình Phước', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Hưng Yên', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bình Định', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tiền Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Thái Bình', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bắc Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Hòa Bình', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'An Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Vĩnh Phúc', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tây Ninh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Thái Nguyên', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Lào Cai', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Nam Định', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Quảng Ngãi', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bến Tre', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Đắk Nông', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Cà Mau', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Vĩnh Long', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Ninh Bình', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Phú Thọ', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Ninh Thuận', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Phú Yên', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Hà Nam', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Hà Tĩnh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Đồng Tháp', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Sóc Trăng', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Kon Tum', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Quảng Bình', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Quảng Trị', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Trà Vinh', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Hậu Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Sơn La', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bạc Liêu', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Yên Bái', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Tuyên Quang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Điện Biên', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Lai Châu', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Lạng Sơn', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Hà Giang', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Bắc Kạn', createdAt: new Date(), updatedAt: new Date() },
				{ name: 'Cao Bằng', createdAt: new Date(), updatedAt: new Date() },
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
		await queryInterface.bulkDelete('Cities', null, {});
	},
};
