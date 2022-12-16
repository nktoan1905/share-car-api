import { where } from 'sequelize';
import db from '../models/index.js';

const carServices = {
	/**
	 * 4 - waiting
	 * 5 - acceppted
	 * 6 - rejected
	 */
	createNewCar: async (data, userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				// Nếu người dùng đã gửi request thì sẽ không cho đăng kí mới
				//
				const checkUserIdExist = await db.User.findOne({
					where: {
						id: userId,
					},
				});
				if (!checkUserIdExist) {
					resolve({
						status: false,
						message: 'This id could not be found!',
					});
				}
				const checkUserHaveResigterCar = await db.Car.count({
					where: {
						userId: userId,
						status: 4,
					},
				});
				if (checkUserHaveResigterCar > 0) {
					resolve({
						status: false,
						message: 'You are requesting a new car please wait for admin approval.',
					});
				} else {
					const newCar = await db.Car.create({
						carName: data.carName || null,
						maxUser: data.maxUser || null,
						img: data.img || null,
						status: 4,
						userId: userId,
					});
					resolve({
						status: true,
						message: 'Register new car Successfully. Please wait for admin approval.',
						car: newCar,
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllCarByUserId: async (userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const count = await db.Car.count({
					where: { userId: userId },
				});
				if (count > 0) {
					const cars = await db.Car.findAll({
						where: {
							userId: userId,
						},
					});
					resolve({
						status: true,
						message: 'Get all car successfully',
						cars: cars,
					});
				} else {
					resolve({
						status: false,
						message: "You don't have any car",
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllCar: async (userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const cars = await db.Car.findAll();
				if (cars) {
					resolve({
						status: true,
						message: 'Get all car successfully',
						cars: cars,
					});
				} else {
					resolve({
						status: false,
						message: "You don't have any car",
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateStatusRegisterCar: async (carId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const car = await db.Car.findOne({ where: { id: carId } });
				if (car == null) {
					resolve({
						status: false,
						message: 'CarId not found.',
					});
				}
				const isUpdate = await db.Car.update({ status: data.status, updatedAt: new Date() }, { where: { id: carId } });
				if (isUpdate) {
					await db.User.update({ roleId: 3 }, { where: { id: car.userId } });
					resolve({
						status: true,
						message: 'Update status request successfully!',
					});
				} else {
					resolve({
						status: false,
						message: 'This car id not found!',
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteCarByCarId: async (carId, userId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.Car.destroy({
					where: {
						id: carId,
						userId: userId,
					},
				});
				console.log(isDelete);
				if (isDelete) {
					resolve({
						status: true,
						message: 'Delete Car Successfully.',
					});
				} else {
					resolve({
						status: false,
						message: 'Car id not found.',
					});
				}
			} catch (error) {}
		});
	},
};
export default carServices;
