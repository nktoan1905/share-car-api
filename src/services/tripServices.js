import db from '../models';
import { Op } from 'sequelize';
const tripServices = {
	createNewTrip: async (userId, data) => {
		// khi người dùng  đăng kí nhưng role
		/**
		 * data {
		 * cost,
		 * startAt,
		 * startPosition,
		 * endPosition,
		 * carId
		 * }
		 */
		return new Promise(async (resolve, reject) => {
			try {
				// check role của driverId có phải là 3 không
				const roleOfuserId = await db.User.findOne({
					where: { id: userId },
					attributes: ['roleId'],
				});
				const car = await db.Car.findOne({
					where: {
						id: data.carId,
						userId: { [Op.eq]: userId },
					},
				});
				if (car == null) {
					resolve({
						status: false,
						message: 'This card Id not found',
					});
				}
				if (roleOfuserId.roleId !== 3) {
					if (car.status === 4) {
						resolve({
							status: false,
							message: 'Your carId is waitting admin approve',
						});
					} else if (car.status === 6) {
						resolve({
							status: false,
							message: 'Your car has been denied by admin',
						});
					}
				} else {
					if (car.status === 6) {
						resolve({
							status: false,
							message: 'Your car has been denied by admin',
						});
					} else if (car.status === 4) {
						resolve({
							status: false,
							message: 'Your carId is waitting admin approve',
						});
					} else {
						const newTrip = await db.Trip.create({
							driverId: userId,
							cost: data.cost,
							startAt: data.startAt,
							startPosition: data.startPosition,
							endPosition: data.endPosition,
							carId: data.carId,
						});
						resolve({
							status: true,
							message: 'Create new trip Successfully',
						});
					}
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllTrip: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const trips = await db.Trip.findAll({
					attributes: ['cost', 'startAt', 'startPosition', 'endPosition'],
					// include: [{ model: db.User, as: 'user' }],
				});
				resolve(trips);
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteTripByid: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
			} catch (error) {
				reject(error);
			}
		});
	},
	orderTripByUserIdAndTripId: async (tripId, userId) => {
		return new Promise(async (resolve, reject) => {
			try {
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default tripServices;
