'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class UserRate extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			UserRate.belongsTo(models.User, {
				foreignKey: 'driverId',
			});
			UserRate.belongsTo(models.User, {
				foreignKey: 'userId',
			});
		}
	}
	UserRate.init(
		{
			driverId: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
			rate: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'UserRate',
		},
	);
	return UserRate;
};
