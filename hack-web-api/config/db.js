const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('hacks_db_hackathon', 'postgres', 'tahaanz',{
    host: 'localhost',
    dialect:'postgres',
});

const connectDB = async () =>{
    try{
        await sequelize.authenticate();
        console.log('connection with db - sucess ');
        await sequelize.sync({ alter: true });

    }catch(error){
        console.error('error db connection', error);
    }
};

module.exports = {sequelize, connectDB};