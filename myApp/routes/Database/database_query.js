const mysql = require('mysql');

const database_connection = require('../Database_module/database_connect');
const connection = database_connection.mysql();

exports.test = async function(test){
    return new Promise(function(resolve, reject){
        let query = `select sum(tot) as sumTotamt from abctable where ilja='${test}'`;

        connection.query(query, function(err, result){
            if(err){
                console.log('mysql connection error : ' + err);
                reject(err);
            }

            if(result[0]){
                resolve(result[0].sumTotamt);
                //resolve(result);
            }
        });
    });
}