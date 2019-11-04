const mysql = require('mysql');
const mysql_config = require('./database_host').mysql;

module.exports = function(){
    return {
        mysql : function(){
            return mysql.createConnection({
                user : mysql_config.user,
                password : mysql_config.password,
                database : mysql_config.database,
                multipleStatements : true
            })
        }
    }
}