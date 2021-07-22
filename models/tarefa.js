'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tarefa.init({
    nome: DataTypes.STRING,
    desc: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    dataDeConclusao: DataTypes.DATE,
    prioridade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tarefa',
  });
  return Tarefa;
};