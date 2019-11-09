const mysql = require('mysql')

const database_connection = require('../Database_module/database_connect.js');
const connection = database_connection.mysql();

//회원 전체리스트 가져오기
exports.memberAll = async function(){
    return new Promise(function(resolve, reject){
        let query = `select * from member`;

        connection.query(query, function(err, result){
            if(err){
                console.log('mysql connection error : ' + err);
                reject(err);
            }
            if(result){
                resolve(result);
                //resolve(result);
            }
        });
    });
}

//회원가입
exports.memberJoin = async function(req){
    return new Promise(function(resolve, reject){
        let query = `insert into member (id, name, phone, birth, address, password) 
                    values ("${req.id}", "${req.name}", "${req.phone}", "${req.birth}", "${req.address}", "${req.password}")`;

        connection.query(query, function(err, result){
            if(err){
                console.log('mysql connection error : ' + err);
                reject(err);
            }
            if(result){
                resolve("success");
                //resolve(result);
            }
        });
    });
}

//id중복검사
exports.idCheck = async function(id){
    return new Promise(function(resolve, reject){
        let query = `select id from member where id='${id}'`;

        connection.query(query, function(err, result){
            if(err){
                console.log('mysql connection error : ' + err);
                reject(err);
            }
            if(result){
                resolve(result.length);
            }
        });
    });
}