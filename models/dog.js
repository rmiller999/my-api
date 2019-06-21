'use strict';
module.exports = (sequelize, DataTypes) => {
  const dog = sequelize.define('dog', {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.INTEGER
  }, {});
  dog.associate = function(models) {
    // associations can be defined here
  };
  return dog;
};