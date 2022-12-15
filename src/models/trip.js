'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Trip extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Trip.belongsTo(models.Car, {
				foreignKey: 'carId',
			});
			Trip.belongsTo(models.User, {
				foreignKey: 'driverId',
			});
		}
	}
	Trip.init(
		{
			driverId: DataTypes.INTEGER,
			cost: DataTypes.DOUBLE,
			startAt: DataTypes.DATE,
			startPosition: DataTypes.STRING,
			endPosition: DataTypes.STRING,
			carId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Trip',
		},
	);
	return Trip;
};
