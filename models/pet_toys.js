'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet_Toys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pet_Toys.init({
    petId: DataTypes.INTEGER,
    ToyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pet_Toys',
  });
  return Pet_Toys;
};