const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_images', {
    prim_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prim_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prim_filename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prim_is_primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    prim_prod_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'prod_id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_images',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_images_pkey",
        unique: true,
        fields: [
          { name: "prim_id" },
        ]
      },
    ]
  });
};
