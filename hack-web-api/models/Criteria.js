const {DataTypes} = require('sequelize');
const {sequelize} = require("../config/db");

const Criteria = sequelize.define('criteria', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    weight:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    hackId: {
  type: DataTypes.INTEGER,
  allowNull: false
}


}, {
  timestamps: false
})