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
        notEmpty: { msg: 'Empty field is not allowed' }
      }
    },
    star: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [1, 2, 3, 4, 5],
      validate: {
        notEmpty: { msg: 'Empty field is not allowed' }
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