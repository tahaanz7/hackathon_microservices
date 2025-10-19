const {DataTypes} = require('sequelize');
const {sequelize} = require('./config/db');

const Hack = sequelize.define('Hack',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primarykey: true
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
},{
    timestamps:false
});


module.exports = Hack;