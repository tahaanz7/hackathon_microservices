const {Sequelize} = require('sequelize');
const { connectDB } = require('../routes/hacksRoutes');

const sequelize = new Sequelize('hacks_db', 'postgres', 'tahaanz',{
    host: 'localhost',
    dialect:'postgres',
});

const connectDB = async () =>{
    try{
        await sequelize.authenticate();
        console.log('connection with db - sucess ');
    }catch(error){
        console.error('error db connection', error);
    }
};

module.exports = {sequelize, connectDB};