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
				foreignKey: 'user_userId_rate',
			});
			UserRate.belongsTo(models.User, {
				foreignKey: 'user_driverId',
			});
		}
	}
	UserRate.init(
		{
			driverId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'User',
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
			rate: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'UserRate',
		},
	);
	return UserRate;
};
