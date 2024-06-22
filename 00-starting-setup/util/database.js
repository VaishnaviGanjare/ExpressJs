const mysql=require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'vaishnavii2704'
});

module.exports=pool.promise();