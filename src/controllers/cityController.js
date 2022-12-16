import cityServices from '../services/cityServices.js';

const cityController = {
	handleGetAllCityAndDistrictsOfThisCity: async (req, res) => {
		try {
			const { message, cities } = await cityServices.getAllCityAndDistrictsOfThisCity();
			res.status(200).json({
				message: message,
				data: cities,
			});
		} catch (error) {
			res.status(400).json(error);
		}
	},
};
export default cityController;
