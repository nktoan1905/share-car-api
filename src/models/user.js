'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.belongsTo(models.AllCode, { as: 'roleData', foreignKey: { name: 'roleId' } });
			User.hasMany(models.Car, {
				foreignKey: 'userId',
				targetKey: 'id',
			});
			User.hasMany(models.Trip, {
				foreignKey: 'driverId',
				targetKey: 'id',
			});
			User.hasMany(models.UserTrip, {
				foreignKey: 'userId',
				targetKey: 'id',
			});
		}
	}
	User.init(
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			fullName: DataTypes.STRING,
			email: DataTypes.STRING,
			img: DataTypes.STRING,
			age: DataTypes.DATE,
			phoneNumber: DataTypes.STRING,
			address: DataTypes.STRING,
			cardId: DataTypes.STRING,
			bankId: DataTypes.STRING,
			roleId: {
				type: DataTypes.INTEGER,
				defaultValue: 2,
			},
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
};
