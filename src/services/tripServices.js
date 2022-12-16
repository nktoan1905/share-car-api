import db from '../models/index.js';
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
					// nếu role ko bằng 3
					// TH1 là xe đang chờ admin approve
					// TH2 là xe bị từ chối
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
					// nếu role bằng 3 là driver
					// TH1 car đăng kí trip đang chờ admin approve
					// TH2 car đăng ký trip bị rejected
					// TH3 trip này trùng time với trip của bạn đã tồn tại
					// TH car này bình thường
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
					attributes: ['id', 'cost', 'startAt', 'startPosition', 'endPosition'],
					where: {
						startAt: { [Op.gt]: new Date() },
					},
					include: [
						{
							model: db.User,
							as: 'driverInfo',
							attributes: ['id', 'fullName', 'email', 'img', 'age', 'phoneNumber', 'address', 'bankId'],
						},
						{
							model: db.Car,
							as: 'carInfo',
							attributes: ['id', 'carName', 'maxUser', 'img'],
						},
					],
					raw: true,
					nest: true,
				});
				resolve({
					message: 'Get all trip successfully',
					trips: trips,
				});
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	deleteTripByid: async (tripId, currentUser) => {
		return new Promise(async (resolve, reject) => {
			// check tripId này có phải của currentUser không hoặc roleId của currentUser này có phải là admin không
			// check tripId có tồn tại không
			const tripInfo = await db.Trip.findOne({
				where: {
					id: tripId,
				},
			});
			if (tripInfo == null) {
				return resolve({
					status: false,
					message: 'Trip id is not exist',
				});
			}
			if (currentUser.roleId === 1) {
				// admin xóa trip
				await db.Trip.destroy({
					where: { id: tripInfo.id },
				});
				resolve({
					status: true,
					message: 'Delete trip successfully',
				});
			} else {
				// check tripId này thuộc về currentUser không
				if (tripInfo.driverId !== currentUser.id) {
					resolve({
						status: false,
						message: "You don't own this trip",
					});
				} else {
					await db.Trip.destroy({
						where: { id: tripInfo.id },
					});
					resolve({
						status: true,
						message: 'Delete trip successfully',
					});
				}
			}
			try {
			} catch (error) {
				reject(error);
			}
		});
	},
	orderTripByUserIdAndTripId: async (tripId, userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				// check tripId có tồn tại ko
				const trip = await db.Trip.findByPk(tripId, {
					include: [
						{
							model: db.Car,
							as: 'carInfo',
						},
					],
					raw: true,
					nest: true,
				});
				if (trip == null) {
					return resolve({
						status: false,
						message: 'Trip is not exist.',
					});
				}
				// check xem thằng user này có phải là thằng driver tạo trip đó không
				if (trip.driverId === userId) {
					return resolve({
						status: false,
						message: 'You are the creator of this trip.',
					});
				}
				// check xem startAt có năm trong quá khứ không
				if (trip.startAt < new Date()) {
					return resolve({
						status: false,
						message: 'This trip has expired',
					});
				}
				// check số lượng ghế còn không
				const amountOfuser = await db.UserTrip.count({
					where: { tripId: trip.id, status: 10 },
				});
				if (amountOfuser === trip.carInfo.maxUser) {
					return resolve({
						status: false,
						message: 'The number of people ordering has been maxed',
					});
				}
				// check xem thằng user này đã order trip chưa
				const checkOrder = await db.UserTrip.findOne({
					where: {
						tripId: trip.id,
						userId: userId,
					},
				});
				if (checkOrder !== null) {
					return resolve({
						status: false,
						message: 'You are order this trip',
					});
				}
				// insert vào
				await db.UserTrip.create({
					tripId: trip.id,
					userId: userId,
					status: 10,
				});
				resolve({
					status: true,
					message: 'Register trip successfully',
				});
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	getAllUserInTrip: async (tripId, userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const trip = await db.Trip.findByPk(tripId, {
					include: [
						{
							model: db.Car,
							as: 'carInfo',
						},
					],
					raw: true,
					nest: true,
				});
				if (trip == null) {
					return resolve({
						status: false,
						message: 'Trip is not exist.',
					});
				}
				// check xem thằng user này có phải là thằng driver tạo trip đó không
				if (trip.driverId === userId) {
					const data = [];
					const userTrips = await db.UserTrip.findAll({
						where: {
							tripId: trip.id,
						},
					});
					for (let i = 0; i < userTrips.length; i++) {
						const userInfo = await db.User.findOne({
							where: {
								id: userTrips[i].userId,
							},
							attributes: ['id', 'fullName', 'phoneNumber', 'address', 'email'],
						});
						const obj = {
							id: userInfo.id,
							fullName: userInfo.fullName,
							email: userInfo.email,
							phoneNumber: userInfo.phoneNumber,
							address: userInfo.address,
						};
						data.push(obj);
					}
					console.log(data);
					resolve({
						status: true,
						message: 'Get all user in trip successfully',
						users: data,
					});
				} else {
					resolve({
						status: false,
						message: 'You are not allowed to see',
					});
				}
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
};
export default tripServices;
