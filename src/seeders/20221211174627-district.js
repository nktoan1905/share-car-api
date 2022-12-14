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
			'Districts',
			[
				{
					name: 'Bình Chánh',
					cityId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Tân',
					cityId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Thạnh',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cần Giờ',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Củ Chi',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gò Vấp',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hóc Môn',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nhà Bè',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Nhuận',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 1',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 10',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 11',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 12',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 2',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 3',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 4',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 5',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 6',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 7',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 8',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quận 9',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Bình',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Phú',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thủ Đức',
					cityId: 1,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ba Đình',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ba Vì',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Từ Liêm',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cầu Giấy',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chương Mỹ',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đan Phượng',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đông Anh',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đống Đa',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gia Lâm',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hà Đông',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hai Bà Trưng',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoài Đức',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoàn Kiếm',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoàng Mai',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Long Biên',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mê Linh',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mỹ Đức',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nam Từ Liêm',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Xuyên',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phúc Thọ',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quốc Oai',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sóc Sơn',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sơn Tây',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tây Hồ',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thạch Thất',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Oai',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Trì',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Xuân',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thường Tín',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ứng Hòa',
					cityId: 2,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cẩm Lệ',
					cityId: 3,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hải Châu',
					cityId: 3,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hòa Vang',
					cityId: 3,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoàng Sa',
					cityId: 3,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Liên Chiểu',
					cityId: 3,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ngũ Hành Sơn',
					cityId: 3,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sơn Trà',
					cityId: 3,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Khê',
					cityId: 3,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bàu Bàng',
					cityId: 4,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bến Cát',
					cityId: 4,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dầu Tiếng',
					cityId: 4,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dĩ An',
					cityId: 4,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Giáo',
					cityId: 4,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Uyên',
					cityId: 4,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thủ Dầu Một',
					cityId: 4,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thuận An',
					cityId: 4,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Biên Hòa',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cẩm Mỹ',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Định Quán',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Long Khánh',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Long Thành',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nhơn Trạch',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Phú',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thống Nhất',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trảng Bom',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Cửu',
					cityId: 5,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Xuân Lộc',
					cityId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cam Lâm',
					cityId: 6,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cam Ranh',
					cityId: 6,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Diên Khánh',
					cityId: 6,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Khánh Sơn',
					cityId: 6,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Khánh Vĩnh',
					cityId: 6,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nha Trang',
					cityId: 6,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ninh Hòa',
					cityId: 6,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trường Sa',
					cityId: 6,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vạn Ninh',
					cityId: 6,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'An Dương',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'An Lão',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bạch Long Vĩ',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cát Hải',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đồ Sơn',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dương Kinh',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hải An',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hồng Bàng',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kiến An',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kiến Thụy',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lê Chân',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ngô Quyền',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thủy Nguyên',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tiên Lãng',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Bảo',
					cityId: 7,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bến Lức',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cần Đước',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cần Giuộc',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đức Hòa',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đức Huệ',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kiến Tường',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mộc Hóa',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân An',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Hưng',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Thạnh',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Trụ',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thạnh Hóa',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thủ Thừa',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Hưng',
					cityId: 8,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Trà My',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đại Lộc',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Điện Bàn',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đông Giang',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Duy Xuyên',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hiệp Đức',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hội An',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nam Giang',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nam Trà My',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nông Sơn',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Núi Thành',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Ninh',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phước Sơn',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quế Sơn',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tam Kỳ',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tây Giang',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thăng Bình',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tiên Phước',
					cityId: 9,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bà Rịa',
					cityId: 10,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Đức',
					cityId: 10,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Côn Đảo',
					cityId: 10,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đất Đỏ',
					cityId: 10,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Long Điền',
					cityId: 10,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Thành',
					cityId: 10,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vũng Tàu',
					cityId: 10,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Xuyên Mộc',
					cityId: 10,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Buôn Đôn',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Buôn Hồ',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Buôn Ma Thuột',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cư Kuin',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Cư M'gar",
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Ea H'Leo",
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ea Kar',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ea Súp',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Krông Ana',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Krông Bông',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Krông Buk',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Krông Năng',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Krông Pắc',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lăk',
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "M'Đrăk",
					cityId: 11,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: ' Thới Lai',
					cityId: 12,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Thủy',
					cityId: 12,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cái Răng',
					cityId: 12,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cờ Đỏ',
					cityId: 12,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ninh Kiều',
					cityId: 12,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ô Môn',
					cityId: 12,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phong Điền',
					cityId: 12,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thốt Nốt',
					cityId: 12,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Thạnh',
					cityId: 12,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Bình',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đảo Phú Quý',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đức Linh',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hàm Tân',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hàm Thuận Bắc',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hàm Thuận Nam',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'La Gi',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phan Thiết',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tánh Linh',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tuy Phong',
					cityId: 13,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bảo Lâm',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bảo Lộc',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cát Tiên',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đạ Huoai',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đà Lạt',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đạ Tẻh',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đam Rông',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Di Linh',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đơn Dương',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đức Trọng',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lạc Dương',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lâm Hà',
					cityId: 14,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'A Lưới',
					cityId: 15,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Huế',
					cityId: 15,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hương Thủy',
					cityId: 15,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hương Trà',
					cityId: 15,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nam Đông',
					cityId: 15,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phong Điền',
					cityId: 15,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Lộc',
					cityId: 15,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Vang',
					cityId: 15,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quảng Điền',
					cityId: 15,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'An Biên',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'An Minh',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Giang Thành',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Giồng Riềng',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gò Quao',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hà Tiên',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hòn Đất',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kiên Hải',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kiên Lương',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Quốc',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Rạch Giá',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Hiệp',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'U minh Thượng',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Thuận',
					cityId: 16,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Ninh',
					cityId: 17,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gia Bình',
					cityId: 17,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lương Tài',
					cityId: 17,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quế Võ',
					cityId: 17,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thuận Thành',
					cityId: 17,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tiên Du',
					cityId: 17,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Từ Sơn',
					cityId: 17,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Phong',
					cityId: 17,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ba Chẽ',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Liêu',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cẩm Phả',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cô Tô',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đầm Hà',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đông Triều',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hạ Long',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hải Hà',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoành Bồ',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Móng Cái',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quảng Yên',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tiên Yên',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Uông Bí',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vân Đồn',
					cityId: 18,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bá Thước',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bỉm Sơn',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cẩm Thủy',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đông Sơn',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hà Trung',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hậu Lộc',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoằng Hóa',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lang Chánh',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mường Lát',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nga Sơn',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ngọc Lặc',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Như Thanh',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Như Xuân',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nông Cống',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quan Hóa',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quan Sơn',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quảng Xương',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sầm Sơn',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thạch Thành',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Hóa',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thiệu Hóa',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thọ Xuân',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thường Xuân',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tĩnh Gia',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Triệu Sơn',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Lộc',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Định',
					cityId: 19,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Anh Sơn',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Con Cuông',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cửa Lò',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Diễn Châu',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đô Lương',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoàng Mai',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hưng Nguyên',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kỳ Sơn',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nam Đàn',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nghi Lộc',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nghĩa Đàn',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quế Phong',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quỳ Châu',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quỳ Hợp',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quỳnh Lưu',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Kỳ',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thái Hòa',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Chương',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tương Dương',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vinh',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Thành',
					cityId: 20,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Giang',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cẩm Giàng',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chí Linh',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gia Lộc',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hải Dương',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kim Thành',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kinh Môn',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nam Sách',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ninh Giang',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Hà',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Miện',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tứ Kỳ',
					cityId: 21,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'An Khê',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'AYun Pa',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chư Păh',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chư Pưh',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chư Sê',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'ChưPRông',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đăk Đoa',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đăk Pơ',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đức Cơ',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ia Grai',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ia Pa',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'KBang',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kông Chro',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Krông Pa',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mang Yang',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Thiện',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Plei Ku',
					cityId: 22,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Long',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bù Đăng',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bù Đốp',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bù Gia Mập',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chơn Thành',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đồng Phú',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đồng Xoài',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hớn Quản',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lộc Ninh',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Riềng',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phước Long',
					cityId: 23,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ân Thi',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hưng Yên',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Khoái Châu',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kim Động',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mỹ Hào',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phù Cừ',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tiên Lữ',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Văn Giang',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Văn Lâm',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Mỹ',
					cityId: 24,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'An Lão',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'An Nhơn',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoài Ân',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoài Nhơn',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phù Cát',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phù Mỹ',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quy Nhơn',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tây Sơn',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tuy Phước',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vân Canh',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Thạnh',
					cityId: 25,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cái Bè',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cai Lậy',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chợ Gạo',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gò Công',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gò Công Đông',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gò Công Tây',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Huyện Cai Lậy',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mỹ Tho',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Phú Đông',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Phước',
					cityId: 26,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đông Hưng',
					cityId: 27,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hưng Hà',
					cityId: 27,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kiến Xương',
					cityId: 27,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quỳnh Phụ',
					cityId: 27,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thái Bình',
					cityId: 27,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thái Thuỵ',
					cityId: 27,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tiền Hải',
					cityId: 27,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vũ Thư',
					cityId: 27,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Giang',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hiệp Hòa',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lạng Giang',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lục Nam',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lục Ngạn',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sơn Động',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Yên',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Việt Yên',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Dũng',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Thế',
					cityId: 28,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cao Phong',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đà Bắc',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hòa Bình',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kim Bôi',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kỳ Sơn',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lạc Sơn',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lạc Thủy',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lương Sơn',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mai Châu',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Lạc',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Thủy',
					cityId: 29,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'An Phú',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Đốc',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Phú',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chợ Mới',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Long Xuyên',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Tân',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Châu',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thoại Sơn',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tịnh Biên',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tri Tôn',
					cityId: 30,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Xuyên',
					cityId: 31,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lập Thạch',
					cityId: 31,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phúc Yên',
					cityId: 31,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sông Lô',
					cityId: 31,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tam Đảo',
					cityId: 31,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tam Dương',
					cityId: 31,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Tường',
					cityId: 31,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Yên',
					cityId: 31,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Lạc',
					cityId: 31,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bến Cầu',
					cityId: 32,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 32,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dương Minh Châu',
					cityId: 32,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gò Dầu',
					cityId: 32,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hòa Thành',
					cityId: 32,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Biên',
					cityId: 32,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Châu',
					cityId: 32,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tây Ninh',
					cityId: 32,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trảng Bàng',
					cityId: 32,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đại Từ',
					cityId: 33,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Định Hóa',
					cityId: 33,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đồng Hỷ',
					cityId: 33,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phổ Yên',
					cityId: 33,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Bình',
					cityId: 33,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Lương',
					cityId: 33,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sông Công',
					cityId: 33,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thái Nguyên',
					cityId: 33,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Võ Nhai',
					cityId: 33,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Hà',
					cityId: 34,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bảo Thắng',
					cityId: 34,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bảo Yên',
					cityId: 34,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bát Xát',
					cityId: 34,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lào Cai',
					cityId: 34,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mường Khương',
					cityId: 34,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sa Pa',
					cityId: 34,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Văn Bàn',
					cityId: 34,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Xi Ma Cai',
					cityId: 34,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Giao Thủy',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hải Hậu',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mỹ Lộc',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nam Định',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nam Trực',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nghĩa Hưng',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trực Ninh',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vụ Bản',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Xuân Trường',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ý Yên',
					cityId: 35,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ba Tơ',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Sơn',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đức Phổ',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lý Sơn',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Minh Long',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mộ Đức',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nghĩa Hành',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quảng Ngãi',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sơn Hà',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sơn Tây',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sơn Tịnh',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tây Trà',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trà Bồng',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tư Nghĩa',
					cityId: 36,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ba Tri',
					cityId: 37,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bến Tre',
					cityId: 37,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Đại',
					cityId: 37,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 37,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chợ Lách',
					cityId: 37,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Giồng Trôm',
					cityId: 37,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mỏ Cày Bắc',
					cityId: 37,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mỏ Cày Nam',
					cityId: 37,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thạnh Phú',
					cityId: 37,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cư Jút',
					cityId: 38,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dăk GLong',
					cityId: 38,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dăk Mil',
					cityId: 38,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Dăk R'Lấp",
					cityId: 38,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dăk Song',
					cityId: 38,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gia Nghĩa',
					cityId: 38,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Krông Nô',
					cityId: 38,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tuy Đức',
					cityId: 38,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cà Mau',
					cityId: 39,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cái Nước',
					cityId: 39,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đầm Dơi',
					cityId: 39,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Năm Căn',
					cityId: 39,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ngọc Hiển',
					cityId: 39,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Tân',
					cityId: 39,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thới Bình',
					cityId: 39,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trần Văn Thời',
					cityId: 39,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'U Minh',
					cityId: 39,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Minh',
					cityId: 40,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Tân',
					cityId: 40,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Long Hồ',
					cityId: 40,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mang Thít',
					cityId: 40,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tam Bình',
					cityId: 40,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trà Ôn',
					cityId: 40,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Long',
					cityId: 40,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vũng Liêm',
					cityId: 40,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gia Viễn',
					cityId: 41,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoa Lư',
					cityId: 41,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kim Sơn',
					cityId: 41,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nho Quan',
					cityId: 41,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ninh Bình',
					cityId: 41,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tam Điệp',
					cityId: 41,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Khánh',
					cityId: 41,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Mô',
					cityId: 41,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cẩm Khê',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đoan Hùng',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hạ Hòa',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lâm Thao',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phù Ninh',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Thọ',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tam Nông',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Sơn',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Ba',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Sơn',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Thủy',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Việt Trì',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Lập',
					cityId: 42,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bác Ái',
					cityId: 43,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ninh Hải',
					cityId: 43,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ninh Phước',
					cityId: 43,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ninh Sơn',
					cityId: 43,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phan Rang - Tháp Chàm',
					cityId: 43,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thuận Bắc',
					cityId: 43,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thuận Nam',
					cityId: 43,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đông Hòa',
					cityId: 44,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đồng Xuân',
					cityId: 44,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phú Hòa',
					cityId: 44,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sơn Hòa',
					cityId: 44,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sông Cầu',
					cityId: 44,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sông Hinh',
					cityId: 44,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tây Hòa',
					cityId: 44,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tuy An',
					cityId: 44,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tuy Hòa',
					cityId: 44,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Lục',
					cityId: 45,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Duy Tiên',
					cityId: 45,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kim Bảng',
					cityId: 45,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lý Nhân',
					cityId: 45,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phủ Lý',
					cityId: 45,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Liêm',
					cityId: 45,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cẩm Xuyên',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Can Lộc',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đức Thọ',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hà Tĩnh',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hồng Lĩnh',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hương Khê',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hương Sơn',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kỳ Anh',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lộc Hà',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nghi Xuân',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thạch Hà',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vũ Quang',
					cityId: 46,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cao Lãnh',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hồng Ngự',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Huyện Cao Lãnh',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Huyện Hồng Ngự',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lai Vung',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lấp Vò',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sa Đéc',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tam Nông',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Hồng',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thanh Bình',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tháp Mười',
					cityId: 47,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cù Lao Dung',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kế Sách',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Long Phú',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mỹ Tú',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mỹ Xuyên',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ngã Năm',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sóc Trăng',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thạnh Trị',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trần Đề',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Châu',
					cityId: 48,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đăk Glei',
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đăk Hà',
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đăk Tô',
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Ia H'Drai",
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kon Plông',
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Kon Rẫy',
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'KonTum',
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ngọc Hồi',
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sa Thầy',
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tu Mơ Rông',
					cityId: 49,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ba Đồn',
					cityId: 50,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bố Trạch',
					cityId: 50,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đồng Hới',
					cityId: 50,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lệ Thủy',
					cityId: 50,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Minh Hóa',
					cityId: 50,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quảng Ninh',
					cityId: 50,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quảng Trạch',
					cityId: 50,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tuyên Hóa',
					cityId: 50,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cam Lộ',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đa Krông',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đảo Cồn cỏ',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đông Hà',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Gio Linh',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hải Lăng',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hướng Hóa',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quảng Trị',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Triệu Phong',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Linh',
					cityId: 51,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Càng Long',
					cityId: 52,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cầu Kè',
					cityId: 52,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cầu Ngang',
					cityId: 52,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 52,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Duyên Hải',
					cityId: 52,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tiểu Cần',
					cityId: 52,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trà Cú',
					cityId: 52,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trà Vinh',
					cityId: 52,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành',
					cityId: 53,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Châu Thành A',
					cityId: 53,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Long Mỹ',
					cityId: 53,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ngã Bảy',
					cityId: 53,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phụng Hiệp',
					cityId: 53,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vị Thanh',
					cityId: 53,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vị Thủy',
					cityId: 53,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Yên',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mai Sơn',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mộc Châu',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mường La',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phù Yên',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quỳnh Nhai',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sơn La',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sông Mã',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sốp Cộp',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thuận Châu',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vân Hồ',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Châu',
					cityId: 54,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bạc Liêu',
					cityId: 55,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đông Hải',
					cityId: 55,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Giá Rai',
					cityId: 55,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hòa Bình',
					cityId: 55,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hồng Dân',
					cityId: 55,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phước Long',
					cityId: 55,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vĩnh Lợi',
					cityId: 55,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lục Yên',
					cityId: 56,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mù Cang Chải',
					cityId: 56,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nghĩa Lộ',
					cityId: 56,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trạm Tấu',
					cityId: 56,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trấn Yên',
					cityId: 56,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Văn Chấn',
					cityId: 56,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Văn Yên',
					cityId: 56,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Bái',
					cityId: 56,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Bình',
					cityId: 56,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chiêm Hóa',
					cityId: 57,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hàm Yên',
					cityId: 57,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lâm Bình',
					cityId: 57,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Na Hang',
					cityId: 57,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sơn Dương',
					cityId: 57,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tuyên Quang',
					cityId: 57,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Sơn',
					cityId: 57,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Điện Biên',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Điện Biên Đông',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Điện Biên Phủ',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mường Ảng',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mường Chà',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mường Lay',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mường Nhé',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nậm Pồ',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tủa Chùa',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tuần Giáo',
					cityId: 58,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lai Châu',
					cityId: 59,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mường Tè',
					cityId: 59,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nậm Nhùn',
					cityId: 59,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phong Thổ',
					cityId: 59,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Sìn Hồ',
					cityId: 59,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tam Đường',
					cityId: 59,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tân Uyên',
					cityId: 59,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Than Uyên',
					cityId: 59,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Sơn',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bình Gia',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cao Lộc',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chi Lăng',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đình Lập',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hữu Lũng',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lạng Sơn',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Lộc Bình',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Tràng Định',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Văn Lãng',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Văn Quan',
					cityId: 60,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Mê',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Quang',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Đồng Văn',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hà Giang',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hoàng Su Phì',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mèo Vạc',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quản Bạ',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quang Bình',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vị Xuyên',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Xín Mần',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Yên Minh',
					cityId: 61,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ba Bể',
					cityId: 62,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bắc Kạn',
					cityId: 62,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bạch Thông',
					cityId: 62,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chợ Đồn',
					cityId: 62,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chợ Mới',
					cityId: 62,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Na Rì',
					cityId: 62,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Ngân Sơn',
					cityId: 62,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Pác Nặm',
					cityId: 62,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bảo Lạc',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bảo Lâm',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cao Bằng',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hạ Lang',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hà Quảng',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Hòa An',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Nguyên Bình',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phục Hòa',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Quảng Uyên',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thạch An',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thông Nông',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trà Lĩnh',
					cityId: 63,

					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Trùng Khánh',
					cityId: 63,

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
		 *
		 */
		await queryInterface.bulkDelete('Districts', null, {});
	},
};
