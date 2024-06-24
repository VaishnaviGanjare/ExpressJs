const Sequelize=require('sequelize');
const sequelize= new Sequelize('node-complete', 'root', 'vaishnavii2704',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;