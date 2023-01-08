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
				as: 'carInfo',
				foreignKey: 'carId',
				targetKey: 'id',
			});
			Trip.belongsTo(models.User, {
				as: 'driverInfo',
				foreignKey: 'driverId',
				targetKey: 'id',
			});
			Trip.hasMany(models.UserTrip, { foreignKey: 'tripId', targetKey: 'id' });
			Trip.belongsTo(models.AllCode, { foreignKey: 'status', as: 'statusInfo' });
		}
	}
	Trip.init(
		{
			driverId: DataTypes.INTEGER,
			cost: DataTypes.DOUBLE,
			startAt: DataTypes.DATE,
			latStartPosition: DataTypes.DOUBLE,
			lngStartPosition: DataTypes.DOUBLE,
			startPosition: DataTypes.STRING,
			latEndPosition: DataTypes.DOUBLE,
			lngEndPosition: DataTypes.DOUBLE,
			endPosition: DataTypes.STRING,
			carId: DataTypes.INTEGER,
			status: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Trip',
		},
	);
	return Trip;
};
