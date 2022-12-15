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
// const sequelize = new Sequelize(
// 	'd5c96to8p0fn02',
// 	'fiwbkaklqwyave',
// 	'bf89d6d93d37ac3f45158082baba205941b704e1c07a925144b0a71b36e5b1db',
// 	{
// 		host: 'ec2-18-215-41-121.compute-1.amazonaws.com',
// 		dialect: 'postgres',
// 		logging: false,
// 		port: '5432',
// 	},
// );

let connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
export default connectDB;
