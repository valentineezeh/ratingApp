'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' }
      }
    },
    branch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { 
        notEmpty: { msg: 'Empty text not allowed' }
      }
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' }
      }
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Empty strings not allowed' }
      }
    },
    
  }, {});
  Rating.associate = function(models) {
    // associations can be defined here
  };
  return Rating;
};