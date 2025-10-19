const {DataTypes} =require('sequelize');
const {sequelize} = require('./config/db');

const Project = sequelize.define('Project',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    desctiption:{
        type: DataTypes.STRING,
        allowNull:true
    },
    submitDate:{
        type: DataTypes.DATE,
        allowNull:false
    }
},{
    timestamp: false
});

module.exports = Project;