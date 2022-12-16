import db from '../models/index.js';
import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

/*
async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				console.log(data);
			} catch (error) {
				reject(error);
			}
		});
*/
const userServices = {
	createNewUser: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let hashed = await bcrypt.hash(data.password, salt);
				let usernameExist = await db.User.findOne({
					where: { username: data.username },
				});
				if (usernameExist) {
					return resolve({
						status: false,
						message: 'Username was already exsit.',
					});
				}
				let newUser = await db.User.create({
					username: data.username,
					password: hashed,
				});
				delete newUser.dataValues.password;
				resolve({
					status: true,
					message: 'Create new user successfully.',
					newUser: newUser.dataValues,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	loginUser: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let user = await db.User.findOne({
					where: { username: data.username },
					raw: true,
				});
				if (user == null) {
					resolve({
						status: false,
						message: 'Wrong username!',
					});
				}
				let validPassword = await bcrypt.compare(data.password, user.password);
				if (!validPassword) {
					resolve({
						status: false,
						message: 'Wrong password!',
					});
				}
				if (user && validPassword) {
					resolve({
						status: true,
						message: 'Login successfully',
						user,
					});
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getUserProfileById: async (id) => {
		return new Promise(async (resolve, reject) => {
			try {
				let user = await db.User.findOne({
					attributes: ['img', 'email', 'address', 'age', 'phoneNumber'],
					where: { id: id },
				});
				if (user) {
					return resolve({
						status: true,
						message: 'Get profile user successfully.',
						data: user,
					});
				}
				resolve({
					status: false,
					message: 'Error',
				});
			} catch (error) {
				reject(error);
			}
		});
	},
	updateUserById: async (id, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				const dataUpdate = {
					fullName: data.fullName,
					email: data.email,
					img: data.img,
					age: data.age,
					phoneNumber: data.phoneNumber,
					address: data.address,
					cardId: data.cardId,
					bankId: data.bankId,
				};
				let current_user = await db.User.update(dataUpdate, { where: { id: id } });
				if (current_user) {
					resolve({
						status: true,
						message: 'Update profile user successfully.',
					});
				}
				resolve({
					status: false,
					message: 'Update profile user failed.',
				});
			} catch (error) {
				reject(error);
			}
		});
	},
};
export default userServices;
