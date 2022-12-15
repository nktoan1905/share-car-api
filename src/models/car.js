'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Car extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Car.belongsTo(models.User, {
				as: 'userDetail',
				foreignKey: 'userId',
				targetKey: 'id',
			});
			Car.belongsTo(models.AllCode, {
				as:'statusInfo',
				foreignKey: 'status',
				targetKey: 'id',
			});
			Car.hasMany(models.Trip, {
				foreignKey: 'carId',
				targetKey: 'id',
			});
		}
	}
	Car.init(
		{
			carName: DataTypes.STRING,
			maxUser: DataTypes.STRING,
			img: DataTypes.STRING,
			status: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Car',
		},
	);
	return Car;
};
