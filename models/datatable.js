'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dataTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dataTable.init({
    name: DataTypes.STRING,
    sortable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    sortBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dataTable',
  });
  return dataTable;
};