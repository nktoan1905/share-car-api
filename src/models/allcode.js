'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class AllCode extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			AllCode.hasOne(models.User, { foreignKey: { name: 'roleId' }, targetKey: 'id' });
			AllCode.hasOne(models.Trip, { foreignKey: { name: 'status' }, targetKey: 'id' });
			AllCode.hasOne(models.Car, {
				foreignKey: 'status',
				targetKey: 'id',
			});
			AllCode.hasOne(models.UserTrip, {
				foreignKey: 'status',
				targetKey: 'id',
			});
		}
	}
	AllCode.init(
		{
			codeName: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'AllCode',
		},
	);
	return AllCode;
};
