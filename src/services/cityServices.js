import db from '../models';

const cityServices = {
	getAllCity: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const cities = await db.User.findAll({
					include: [
						{
							model: db.AllCode,
							as: 'role',
						},
					],
					raw: true,
					nest: true,
				});
				console.log(cities);
				resolve({
					message: 'Get all city Successfully!',
					cities,
				});
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	getAllDistrict: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const districts = await db.District.findAll({ attributes: ['id', 'name', 'cityId'] });
				resolve({
					message: 'Get all District Successfully!',
					districts,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default cityServices;
