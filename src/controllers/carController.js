import carServices from '../services/carServices.js';

const carController = {
	registerNewCar: async (req, res) => {
		if (req.user.roleId === 1) {
			return res.status(400).json({
				message: "Your can't register car",
			});
		}
		const { status, message, car } = await carServices.createNewCar(req.body, req.user.id);
		if (status) {
			res.status(200).json({
				message: message,
				data: car,
			});
		} else {
			res.status(400).json({
				message: message,
			});
		}
	},
	deleteCarForUser: async (req, res) => {
		const id = req.params.carId;
		const { status, message } = await carServices.deleteCarByCarId(id, req.user.id);
		if (status) {
			res.status(200).json({
				message: message,
			});
		} else {
			res.status(400).json({
				message: message,
			});
		}
	},
	getAllCarForUser: async (req, res) => {
		const { status, message, cars } = await carServices.getAllCarByUserId(req.user.id);
		if (status) {
			res.status(200).json({
				message: message,
				data: cars,
			});
		} else {
			res.status(400).json({
				message: message,
			});
		}
	},
	getAllCarForAdmin: async (req, res) => {
		const { status, message, cars } = await carServices.getAllCar();
		if (status) {
			res.status(200).json({
				message: message,
				data: cars,
			});
		} else {
			res.status(400).json({
				message: message,
			});
		}
	},
	UpdateStatusRequest: async (req, res) => {
		const carId = req.params.carId;
		const { status, message } = await carServices.updateStatusRegisterCar(carId, req.body);
		if (status) {
			res.status(200).json({
				message: message,
			});
		} else {
			res.status(400).json({
				message: message,
			});
		}
	},
};
export default carController;
