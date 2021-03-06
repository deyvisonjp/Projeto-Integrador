'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfil = sequelize.define('Perfil', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    sobrenome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    sobre_usuario: DataTypes.TEXT('LONG'),
    avatar: DataTypes.STRING,
    usuario_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    deficiencia_id: DataTypes.INTEGER,
    endereco_id: DataTypes.INTEGER,
  }, {
    tableName: 'perfil',
    freezeTableName: true
  });
  Perfil.associate = function(models) {
    Perfil.belongsTo(models.Deficiencia, {
      foreignKey: 'deficiencia_id',
      as: 'deficiencia'
    })
    Perfil.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    })
    Perfil.belongsTo(models.Endereco, {
      foreignKey: 'endereco_id',
      as: 'endereco'
    })
  };
  return Perfil;
};