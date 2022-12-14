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
			User.belongsTo(models.AllCode, {
				foreignKey: 'roleId',
			});
			User.hasMany(models.Car, {
				foreignKey: 'userId',
			});
			User.hasMany(models.UserRate, {
				foreignKey: 'user_userId_rate',
			});
			User.hasMany(models.UserRate, {
				foreignKey: 'user_driverId',
			});
			User.hasMany(models.Trip, {
				foreignKey: 'driverId',
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
				references: {
					model: 'AllCode',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
};
