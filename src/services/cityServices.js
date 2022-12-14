import db from '../models';

const cityServices = {
	getAllCity: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const cities = await db.City.findAll({ attributes: ['id', 'name'] });
				resolve({
					message: 'Get all city Successfully!',
					cities,
				});
			} catch (error) {
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
