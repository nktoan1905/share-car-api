const { default: cityServices } = require('../services/cityServices');

const cityController = {
	getAllCity: async (req, res) => {
		try {
			const { message, cities } = await cityServices.getAllCity();
			res.status(200).json({
				message: message,
				data: cities,
			});
		} catch (error) {
			res.status(400).json(error);
		}
	},
	getAllDistrict: async (req, res) => {
		try {
			const { message, districts } = await cityServices.getAllDistrict();
			res.status(200).json({
				message: message,
				data: districts,
			});
		} catch (error) {
			res.status(400).json(error);
		}
	},
};
export default cityController;
