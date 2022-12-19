import tripServices from '../services/tripServices.js';

const tripController = {
	createNewTrip: async (req, res) => {
		try {
			if (req.user.roleId === 1) {
				return res.status(400).json({
					message: 'Admin are not allowed create new trip',
				});
			}
			const { status, message } = await tripServices.createNewTrip(req.user.id, req.body);
			if (!status) {
				res.status(400).json({
					message: message,
				});
			} else {
				res.status(200).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	getAllTrip: async (req, res) => {
		try {
			const { message, trips } = await tripServices.getAllTrip();
			res.status(200).json({
				message: message,
				data: trips,
			});
		} catch (error) {
			res.status(400).json({
				message: error,
			});
		}
	},
	handleDeleteTripByTripId: async (req, res) => {
		try {
			const tripId = req.params.tripId;
			const { status, message } = await tripServices.deleteTripByid(tripId, req.user);
			if (status) {
				res.status(200).json({
					message,
				});
			} else {
				res.status(404).json({
					message,
				});
			}
		} catch (error) {
			res.status(400).json({
				message: error,
			});
		}
	},
	handleOrderTripByUserIdAndTripId: async (req, res) => {
		try {
			const tripId = req.params.tripId;
			const { status, message } = await tripServices.orderTripByUserIdAndTripId(tripId, req.user.id);

			if (status) {
				res.status(200).json({
					message,
				});
			} else {
				res.status(400).json({
					message,
				});
			}
		} catch (error) {
			res.status(400).json({
				message: error,
			});
		}
	},
	handleGetAllUserInTrip: async (req, res) => {
		try {
			const tripId = req.params.tripId;
			const { status, message, users } = await tripServices.getAllUserInTrip(tripId, req.user.id);
			if (status) {
				res.status(200).json({
					message: message,
					data: users,
				});
			} else {
				res.status(400).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(400).json({
				message: error,
			});
		}
	},
	handleupdateStatusTrip: async (req, res) => {
		try {
			const tripId = req.params.tripId;
			const { status, message, newStatus } = await tripServices.updateStatusTrip(tripId, req.user.id);
			if (status) {
				res.status(200).json({
					message: message,
					newStatus: newStatus,
				});
			} else {
				res.status(400).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleGetAllTripByDriverId: async (req, res) => {
		try {
			const driverId = req.user.id;
			const { status, message, trips } = await tripServices.getAllTripByDriverId(driverId);
			if (status) {
				res.status(200).json({
					message: message,
					data: trips,
				});
			} else {
				res.status(400).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
	handleGetAllTripByUserId: async (req, res) => {
		try {
			const userId = req.user.id;
			const { status, message, trips } = await tripServices.getAllTripByUserId(userId);
			if (status) {
				res.status(200).json({ message: message, trips: trips });
			} else {
				res.status(400).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(400).json(error);
		}
	},
};
export default tripController;
