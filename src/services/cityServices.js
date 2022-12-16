import db from '../models/index.js';

const cityServices = {
	getAllCityAndDistrictsOfThisCity: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const cities = await db.City.findAll({ attributes: ['id', 'name'] });
				for (let i = 0; i < cities.length; i++) {
					const districts = await db.District.findAll({
						where: { cityId: cities[i].id },
						attributes: ['id', 'name'],
					});
					cities[i].districts = districts;
				}
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
};
export default cityServices;
