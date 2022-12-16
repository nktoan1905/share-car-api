import jwt from 'jsonwebtoken';
import { json } from 'sequelize';
import db from '../models/index.js';
import userServices from '../services/userServices.js';

const authController = {
	registerUser: async (req, res) => {
		try {
			const { status, message, newUser } = await userServices.createNewUser(req.body);
			if (status) {
				res.status(200).json({
					message: message,
					data: newUser,
				});
			} else {
				res.status(400).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(400).send(error);
		}
	},
	generateAccessToken: (user) => {
		return jwt.sign(
			{
				id: user.id,
				roleId: user.roleId,
			},
			process.env.JWT_ACCESS_KEY,
			{
				expiresIn: '1d',
			},
		);
	},
	generateRefreshToken: (user) => {
		return jwt.sign(
			{
				id: user.id,
				roleId: user.roleId,
			},
			process.env.JWT_REFRESH_KEY,
			{
				expiresIn: '365d',
			},
		);
	},
	login: async (req, res) => {
		const { status, message, user } = await userServices.loginUser(req.body);
		if (!status) {
			res.status(404).json(message);
		} else {
			const accessToken = authController.generateAccessToken(user);
			const refreshToken = authController.generateRefreshToken(user);
			await db.RefreshToken.create({
				token: refreshToken,
			});
			delete user.password;
			res.status(200).json({
				message: message,
				data: {
					...user,
					accessToken,
				},
			});
		}
	},
	refreshToken: async (req, res) => {
		const refreshToken = req.cookies.refreshToken;
		if (!refreshToken) {
			return res.status(401).json("You're not authenticated");
		}
		const refreshTokenExist = await db.RefreshToken.findOne({
			where: { token: refreshToken },
			raw: true,
		});
		if (refreshTokenExist == null) {
			return res.status(403).json('Refresh token is not valid');
		}
		jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, async (err, user) => {
			if (err) {
				return res.status(403).json('Refresh token is not valid');
			}
			// create new access token và refresh token

			await db.RefreshToken.destroy({ where: { token: refreshToken } });

			const newAccessToken = authController.generateAccessToken(user);
			const newRefreshToken = authController.generateRefreshToken(user);

			await db.RefreshToken.create({
				token: newRefreshToken,
			});

			res.cookie('refreshToken', newRefreshToken, {
				httpOnly: true,
				secure: false,
				sameSite: 'strict',
			});

			res.status(200).json({
				newAccessToken: newAccessToken,
			});
		});
	},
	logout: async (req, res) => {
		res.status(200).json({ status: 'Logout Succeed' });
	},
};
export default authController;
