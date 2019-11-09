var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
//DB
let database_query = require('./Database/database_query');



/* GET home page. */
router.get('/', async(req, res, next) =>{
  const memberAll = await database_query.memberAll();
  console.log('memberAll : ' + JSON.stringify(memberAll));
  console.log('memberAll.length : ' + memberAll.length);
  res.render('index', { 'page': 'home', 'memberAll' : memberAll });
});


router.get('/login', function(req, res, next) {
  res.render('login', { page: 'login' });
});


router.get('/join', async(req, res, next) => {
  res.render('join', { page: 'join' });
});

router.post('/join', async(req, res, next) =>{
  //사용자가 입력한 값(id) db에서 중복검사
  let idCheck = await database_query.idCheck(req.body.id);
  console.log('idCheck : ' + idCheck);
  if(idCheck == '0'){
    let memberJoin = await database_query.memberJoin(req.body);
    res.send({result:'회원가입 성공'});
  }else{
    console.log('else부분');
    res.send({result:'id중복'});
  }


});


router.get('/fileupload', function(req, res, next) {
  res.render('fileupload', { page: 'fileupload' });
});


router.get('/edit', function(req, res, next){
  res.render('product/edit', {
    title : "Express~"
  });
});




router.post('/test1234', async(req, res)=>{
  const test1234 = await database_query.test(test);

  //ex1
  res.render('test/test/test', {
    'message' : test1234
  });

  //ex2
  res.send('success');

  //ex3
  res.json({
    '1' : '1',
    'message' : test1234,
    '3' : '3'
  });

});




module.exports = router;
