import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('share_car', 'share_car_user', 'VW7w0W5OLdhv1XCYgsSRPlvTsCuuCz0x', {
	host: 'dpg-cedjs71a6gdvngfph72g-a.singapore-postgres.render.com',
	dialect: 'postgres',
	logging: false,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});
// const sequelize = new Sequelize('share_car', 'root', '123456789', {
// 	host: 'localhost',
// 	dialect: 'mysql',
// 	logging: false,
// 	dialectOptions: {
// 		ssl: {
// 			require: true,
// 			rejectUnauthorized: false,
// 		},
// 	},
// });
let connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
export default connectDB;
