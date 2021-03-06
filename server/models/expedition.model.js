const expedition = (sequelize,DataTypes)=>{
    const Expedition = sequelize.define('expedition', {
        expe_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        expe_name: {
          type: DataTypes.STRING(25),
          allowNull: true,
          unique: "expedition_expe_name_key"
        }
      }, {
        sequelize,
        tableName: 'expedition',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "expedition_expe_name_key",
            unique: true,
            fields: [
              { name: "expe_name" },
            ]
          },
          {
            name: "expedition_pkey",
            unique: true,
            fields: [
              { name: "expe_id" },
            ]
          },
        ]
      });

      Expedition.associate = models =>{
        Expedition.hasMany(models.orderShipping,{foreignKey: 'oship_expe_id'})
    }

      return Expedition;
}
export default expedition;