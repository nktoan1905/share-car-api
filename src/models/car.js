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
				foreignKey: 'userId',
			});
			Car.belongsTo(models.AllCode, {
				foreignKey: 'status',
			});
			Car.hasMany(models.Trip, {
				foreignKey: 'carId',
			});
		}
	}
	Car.init(
		{
			carName: DataTypes.STRING,
			maxUser: DataTypes.STRING,
			img: DataTypes.STRING,
			status: {
				type: DataTypes.INTEGER,
				references: {
					model: 'AllCode',
					key: 'id',
				},
			},
			userId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'User',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'Car',
		},
	);
	return Car;
};
