'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class District extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			District.belongsTo(models.City, {
				foreignKeyConstraint: 'city_id_have_many_disctrict',
			});
		}
	}
	District.init(
		{
			name: DataTypes.STRING,
			cityId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'City',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'District',
		},
	);
	return District;
};
