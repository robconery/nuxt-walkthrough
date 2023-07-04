const { Model, DataTypes } = require('sequelize');

class Product extends Model{}

exports.init = function(sequelize){
  Product.init({
    sku: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    name: DataTypes.TEXT
    }, {
     sequelize,
     underscored: true,
     timestamps: false,
     hooks : {
       //https://github.com/sequelize/sequelize/blob/v6/src/hooks.js#L7
    }
  });
  return { Product };
}
