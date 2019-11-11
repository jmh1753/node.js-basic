var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

//DB
let database_query = require('./Database/database_query');



/* GET home page. */
router.get('/', async(req, res, next) =>{
  const memberAll = await database_query.memberAll();
  const page = 'home';
  res.render('index', { 'page': page, 'memberAll' : memberAll });
});


router.get('/login', function(req, res, next) {
  const page = 'login';
  res.render('index', { 'page': page });
});


router.get('/join', async(req, res, next) => {
  const page = 'join';
  res.render('index', { 'page': page });
});

router.post('/join', async(req, res, next) =>{
  //사용자가 입력한 값(id) db에서 중복검사
  let idCheck = await database_query.idCheck(req.body.id);

  if(idCheck == '0'){
    await database_query.memberJoin(req.body);
    res.send({result:'회원가입 성공'});
  }else{
    console.log('else부분');
    res.send({result:'id중복'});
  }
});


router.get('/fileupload', function(req, res, next) {
  const page = 'fileupload';
  res.render('index', { 'page': page });
});


module.exports = router;