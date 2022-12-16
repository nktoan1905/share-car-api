import userServices from '../services/userServices.js';

const userController = {
	profileUser: async (req, res) => {
		try {
			const id = req.params.id;
			const { status, message, data } = await userServices.getUserProfileById(id);
			if (status) {
				res.status(200).json({
					message: message,
					data: data,
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

	updateUser: async (req, res) => {
		try {
			const id = req.user.id;
			const { status, message } = await userServices.updateUserById(id, req.body);
			if (status) {
				res.status(200).json({
					message: message,
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
};
export default userController;
